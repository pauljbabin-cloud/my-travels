import { TripStateInstance, resetMarkerClusterer, clearPolylines } from "./tripState";
import { initGoogleLibraries } from "@/utils/initGoogleLibraries";
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { faHospitalUser, faHouseUser, faSchool, faCaravan, faGasPump, faCamera, faBed, faCampground, faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { ShowHomes } from "./showhomes";
import { Places } from "./places";

interface GoogleLibs {
    AdvancedMarkerElement: any;
    PolylineClass: any;
    decodePath: any;
}

export interface SidebarItemData {
    id: string;
    title: string;
    description: string;
    image: string;
    type: string;
    position: google.maps.LatLngLiteral;
}

interface RunMasterSequenceParams {
    TripMap: any;
    tripId ?  : string;
    tripYear ?  : string;
    TripRoute: string;
    TripDetails: string;
    initialCenter ?  : google.maps.LatLngLiteral;
    initialZoom ?  : number;
}

interface TripDetails {
    title: string;
    description: string;
    image: string;
    type: string;
    index: number;
}

let activeMarker: google.maps.marker.AdvancedMarkerElement | null = null;

function splitCsvLine(line: string): string[]{
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}

export async function runMasterSequence(
    params: RunMasterSequenceParams,
    state: TripStateInstance,
    setSidebarItems: React.Dispatch < React.SetStateAction < SidebarItemData[] >> ,
    setHomesItems: React.Dispatch < React.SetStateAction < any[] >> ,
    setPlacesItems: React.Dispatch < React.SetStateAction < any[] >> ,
    signal: AbortSignal): Promise < void > {
    const currentMap = params.TripMap;
    if (!currentMap)
        return;

    clearPolylines(state);
    resetMarkerClusterer(state);

    if (signal.aborted)
        return;

    const libs = await initGoogleLibraries();
    if (signal.aborted || !libs)
        return;

    if (params.TripDetails === 'homes') {
        setSidebarItems([]);
        await ShowHomes(params, state, setHomesItems, signal);
        return;
    }

    if (params.TripDetails === 'places') {
        setSidebarItems([]);
        setHomesItems([]);
        await Places(params, state, setPlacesItems, signal);
        return;
    }

    // --- Route Execution from Prisma `Routes` Table (with `routes.csv` Fallback) ---
    let drawnFromDb = false;

    if (params.tripYear) {
        try {
            const routeRes = await fetch(`/api/routes/${params.tripYear}`, {
                signal
            });
            if (routeRes.ok) {
                const { routes } = await routeRes.json();
                if (Array.isArray(routes) && routes.length > 0) {
                    for (const routeSegment of routes) {
                        if (signal.aborted)
                            return;
                        await computeAndDrawRoute(routeSegment, state, currentMap, signal);
                    }
                    drawnFromDb = true;
                }
            }
        } catch (error) {
            console.warn("API routes fetch failed, trying routes.csv fallback:", error);
        }
    }

    // Fallback to consolidated `/csvs/routes.csv` filtered by `tripYear`
    if (!drawnFromDb && params.TripRoute && params.tripYear) {
        const routeSegments = await loadRoutesFromMasterCSV(params.TripRoute, params.tripYear, signal);
        for (const segment of routeSegments) {
            if (signal.aborted)
                return;
            await computeAndDrawRoute(segment, state, currentMap, signal);
        }
    }

    if (signal.aborted)
        return;

    // --- Trip Stops / Sidebar Markers from Prisma `Trips` Table (with `trips.csv` Fallback) ---
    if (params.TripDetails && params.TripDetails !== 'none' && params.tripYear) {
        let structuralData: SidebarItemData[] = await fetchSidebarTripsAndBuildMarkers(
                currentMap,
                params.tripYear,
                state,
                libs,
                signal,
                params.initialCenter,
                params.initialZoom);

        // Fallback to consolidated `/csvs/trips.csv` filtered by `tripYear`
        if (structuralData.length === 0) {
            structuralData = await parseSidebarCSVAndBuildMarkers(
                    currentMap,
                    params.TripDetails,
                    params.tripYear,
                    state,
                    libs,
                    signal,
                    params.initialCenter,
                    params.initialZoom);
        }

        if (!signal.aborted) {
            setSidebarItems(structuralData);
        }
    } else {
        setSidebarItems([]);
    }

    if (!signal.aborted) {
        setHomesItems([]);
        setPlacesItems([]);
    }
}

async function loadRoutesFromMasterCSV(
    csvPath: string,
    tripYear: string,
    signal: AbortSignal): Promise < any[] > {
    const segments: any[] = [];

    try {
        const response = await fetch(csvPath, {
            signal
        });
        if (signal.aborted || !response.ok)
            return [];

        const csvText = await response.text();
        const rows = csvText.split('\n').slice(1);

        let currentSegment: any = null;

        for (const row of rows) {
            const trimmedRow = row.trim();
            if (!trimmedRow)
                continue;

            // Columns matching Routes model: year, type, lat, lng, name
            const cols = splitCsvLine(trimmedRow);
            const rowYear = cols[0];
            if (rowYear !== tripYear)
                continue;

            const type = (cols[1] || '').toLowerCase();
            const lat = parseFloat(cols[2]);
            const lng = parseFloat(cols[3]);

            if (isNaN(lat) || isNaN(lng))
                continue;

            if (type === 'origin') {
                if (currentSegment && currentSegment.origin && currentSegment.destination) {
                    segments.push(currentSegment);
                }
                currentSegment = {
                    origin: {
                        location: {
                            lat,
                            lng
                        }
                    },
                    destination: null,
                    intermediates: [],
                    travelMode: 'DRIVING',
                    routingPreference: 'TRAFFIC_AWARE',
                };
            } else if (type === 'destination' && currentSegment) {
                currentSegment.destination = {
                    location: {
                        lat,
                        lng
                    }
                };
                segments.push(currentSegment);
                currentSegment = null;
            } else if (currentSegment) {
                currentSegment.intermediates.push({
                    location: {
                        lat,
                        lng
                    }
                });
            }
        }

        if (currentSegment && currentSegment.origin && currentSegment.destination) {
            segments.push(currentSegment);
        }
    } catch (error) {
        console.error('Error loading routes from master CSV:', error);
    }

    return segments;
}

async function computeAndDrawRoute(routeData: any, state: TripStateInstance, currentMap: any, signal: AbortSignal) {
    const { Route } = await google.maps.importLibrary('routes')as any;
    if (signal.aborted)
        return;

    try {
        const RouteRequest = {
            origin: {
                location: {
                    lat: routeData.origin.location.lat,
                    lng: routeData.origin.location.lng
                }
            },
            destination: {
                location: {
                    lat: routeData.destination.location.lat,
                    lng: routeData.destination.location.lng
                }
            },
            intermediates: (routeData.intermediates || []).map((waypoint: any) => ({
                    location: {
                        lat: waypoint.location.lat,
                        lng: waypoint.location.lng
                    },
                    via: true
                })),
            travelMode: routeData.travelMode || 'DRIVING',
            routingPreference: routeData.routingPreference || 'TRAFFIC_AWARE',
            routeModifiers: routeData.routeModifiers || {
                avoidFerries: false,
                avoidTolls: false
            },
            fields: ['path', 'legs'],
        };

        const { routes } = await Route.computeRoutes(RouteRequest as any);
        if (signal.aborted)
            return;

        if (routes && routes.length > 0) {
            const lines = routes[0].createPolylines();
            lines.forEach((polyline: any) => {
                if (signal.aborted) {
                    polyline.setMap(null);
                    return;
                }
                polyline.setMap(currentMap);
                state.mapPolylines.push(polyline);
            });
        }
    } catch (error) {
        console.error('Error computing travel routes:', error);
    }
}

async function parseSidebarCSVAndBuildMarkers(
    currentMap: any,
    detailsPath: string,
    tripYear: string,
    state: TripStateInstance,
    activeLibs: GoogleLibs,
    signal: AbortSignal,
    initialCenter ?  : google.maps.LatLngLiteral,
    initialZoom ?  : number): Promise < SidebarItemData[] > {
    const parsedItems: SidebarItemData[] = [];
    const bounds = new google.maps.LatLngBounds();

    try {
        const response = await fetch(detailsPath, {
            signal
        });
        if (signal.aborted || !response.ok)
            return [];

        const csvText = await response.text();
        const rows = csvText.split('\n').slice(1);

        let matchIndex = 0;

        rows.forEach((row) => {
            const trimmedRow = row.trim();
            if (!trimmedRow)
                return;

            // Columns matching Trips model: year, lat, lng, title, description, image, type
            const cols = splitCsvLine(trimmedRow);
            const rowYear = cols[0];
            if (rowYear !== tripYear)
                return;
            matchIndex += 1;
            const lat = parseFloat(cols[1]);
            const lng = parseFloat(cols[2]);
            const details: TripDetails = {
                title: cols[3] || '',
                description: cols[4] || '',
                image: cols[5] || '',
                type: cols[6] || '',
                index: matchIndex,
            };
            const updatedTitle: string = details.title.replaceAll("<br />", ". ");
            if (!isNaN(lat) && !isNaN(lng)) {
                const position = {
                    lat,
                    lng
                };
                bounds.extend(position);
                const markerContentElement = buildMarkerUI(details);
                const marker = new activeLibs.AdvancedMarkerElement({
                    position,
                    title: updatedTitle,
                    content: markerContentElement,
                    gmpClickable: true,
                });
                const id = matchIndex.toString();
                state.markerRegistry[id] = marker;
                markerContentElement.addEventListener("click", () => {
                    currentMap.setZoom(18);
                    currentMap.setCenter(position);
                    toggleHighlight(marker);
                });
                state.markers.push(marker);
                parsedItems.push({
                    id,
                    title: details.title,
                    description: details.description,
                    image: details.image,
                    type: details.type,
                    position
                });
            }
        });
        if (signal.aborted) {
            state.markers.forEach(m => m.map = null);
            return [];
        }
        const clustererInstance = new MarkerClusterer({
            map: currentMap
        });
        clustererInstance.addMarkers(state.markers);
        state.markerCluster = clustererInstance;
        if (initialCenter && initialZoom !== undefined) {
            attachResetViewControl(currentMap, initialCenter, initialZoom);
        } else if (!bounds.isEmpty()) {
            attachResetViewControl(currentMap, bounds.getCenter().toJSON(), 7);
        }
    } catch (error) {
        console.error('Error loading or parsing trips.csv:', error);
    }
    return parsedItems;
}
function buildMarkerUI(details: TripDetails): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "property";
    const cleanVariable = details.type.trim();
    const iconMap: Record < string,
    any >  = {
        faGasPump,
        faCamera,
        faBed,
        faCampground,
		faHouseUser,
        faFontAwesome
    };
    const selectedIcon = iconMap[cleanVariable] || faBed;
    let adjustedIcon = faIcon(selectedIcon, {
        styles: {
            color: 'black',
            'font-size': '2em'
        },
        attributes: {
            'aria-hidden': 'true'
        },
    });
    const iconHtml = adjustedIcon.html[0];
    const detailsClass = 'details';
    if (details.image === 'blank') {
        container.innerHTML = `<div class="icon">${iconHtml}</div><div class="${detailsClass}"><div class="description">${details.title}</div></div>`;
    } else {
        container.innerHTML = `<div class="icon" style="color: black;">${iconHtml}</div><div class="${detailsClass}"><a href="/slideshow?showId=${details.image}" target="_blank"><img id="myImage-${details.index}" src="/images/s-${details.image}.jpg" width="60" height="60" data-image="${details.image}" class="center-block"></a><div class="description">${details.title}</div></div>`;
    }
    return container;
}
export function toggleHighlight(clickedMarker: google.maps.marker.AdvancedMarkerElement) {
    const content = clickedMarker.content as HTMLElement;
    if (!content)
        return;
    if (content.classList.contains("highlight")) {
        content.classList.remove("highlight");
        clickedMarker.zIndex = null;
        activeMarker = null;
    } else {
        if (activeMarker && activeMarker !== clickedMarker) {
            const oldContent = activeMarker.content as HTMLElement;
            if (oldContent)
                oldContent.classList.remove("highlight");
            activeMarker.zIndex = null;
        }
        content.classList.add("highlight");
        clickedMarker.zIndex = 1;
        activeMarker = clickedMarker;
    }
}
export function removeResetViewControl(currentMap: google.maps.Map) {
    const controls = currentMap.controls[google.maps.ControlPosition.TOP_RIGHT];
    for (let i = controls.getLength() - 1; i >= 0; i--) {
        if (controls.getAt(i)?.id === "map-reset-view-btn") {
            controls.removeAt(i);
        }
    }
}
export function attachResetViewControl(
    currentMap: google.maps.Map,
    center: google.maps.LatLngLiteral,
    zoom: number) {
    removeResetViewControl(currentMap);
    const controlButton = document.createElement("button");
    controlButton.id = "map-reset-view-btn";
    controlButton.textContent = "Reset Zoom";
    controlButton.title = "Return to initial view";
    controlButton.type = "button";
    Object.assign(controlButton.style, {
        backgroundColor: "#fff",
        border: "2px solid #fff",
        borderRadius: "3px",
        boxShadow: "0 2px 6px rgba(0,0,0,.3)",
        color: "rgb(25,25,25)",
        cursor: "pointer",
        fontFamily: "Roboto,Arial,sans-serif",
        fontSize: "14px",
        fontWeight: "500",
        margin: "10px",
        padding: "8px 12px",
        textAlign: "center",
    });
    controlButton.addEventListener("click", () => {
        currentMap.panTo(center);
        currentMap.setZoom(zoom);
        if (activeMarker) {
            toggleHighlight(activeMarker);
        }
    });
    currentMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlButton);
}
async function fetchSidebarTripsAndBuildMarkers(
    currentMap: any,
    tripYear: string,
    state: TripStateInstance,
    activeLibs: GoogleLibs,
    signal: AbortSignal,
    initialCenter ?  : google.maps.LatLngLiteral,
    initialZoom ?  : number): Promise < SidebarItemData[] > {
    const parsedItems: SidebarItemData[] = [];
    const bounds = new google.maps.LatLngBounds();
    try {
        const response = await fetch(`/api/trips/${tripYear}`, {signal});
        if (signal.aborted || !response.ok)
            return [];
        const { stops } = await response.json();
        if (!Array.isArray(stops) || stops.length === 0)
            return [];
        stops.forEach((stop: any, i: number) => {
            const lat = Number(stop.lat);
            const lng = Number(stop.lng);
            const details: TripDetails = {
                title: stop.title || '',
                description: stop.description || '',
                image: stop.image || '',
                type: stop.type || '',
                index: i + 1,
            };
            const updatedTitle: string = details.title.replaceAll("<br />", ". ");
            if (!isNaN(lat) && !isNaN(lng)) {
                const position = {
                    lat,
                    lng
                };
                bounds.extend(position);
                const markerContentElement = buildMarkerUI(details);
                const marker = new activeLibs.AdvancedMarkerElement({
                    position,
                    title: updatedTitle,
                    content: markerContentElement,
                    gmpClickable: true,
                });
                const id = stop.id ? stop.id.toString() : (i + 1).toString();
                state.markerRegistry[id] = marker;
                markerContentElement.addEventListener("click", () => {
                    currentMap.setZoom(18);
                    currentMap.setCenter(position);
                    toggleHighlight(marker);
                });
                state.markers.push(marker);
                parsedItems.push({
                    id,
                    title: details.title,
                    description: details.description,
                    image: details.image,
                    type: details.type,
                    position,
                });
            }
        });
        if (signal.aborted) {
            state.markers.forEach((m) => (m.map = null));
            return [];
        }
        const clustererInstance = new MarkerClusterer({
            map: currentMap
        });
        clustererInstance.addMarkers(state.markers);
        state.markerCluster = clustererInstance;
        if (initialCenter && initialZoom !== undefined) {
            attachResetViewControl(currentMap, initialCenter, initialZoom);
        } else if (!bounds.isEmpty()) {
            attachResetViewControl(currentMap, bounds.getCenter().toJSON(), 7);
        }
    } catch (error) {
        console.error('Error loading Trip details from API:', error);
    }
    return parsedItems;
}
