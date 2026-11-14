import { TripStateInstance, resetMarkerClusterer, clearPolylines } from "./tripState.tsx";
import { initGoogleLibraries } from "@/utils/initGoogleLibraries.tsx";
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { faHospitalUser, faHouseUser, faSchool, faCaravan, faGasPump, faCamera, faBed, faCampground, faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { loadRouteFromCSV } from "./loadRouteFromCSV.tsx";
import { ShowHomes } from "./showhomes.tsx";
import { Places } from "./places.tsx";

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
    tripId ?  : string; // Added to dynamically fetch API route
    TripRoute: string;
    TripRoute1: string | null;
    TripDetails: string;
}

interface TripDetails {
    title: string;
    description: string;
    image: string;
    type: string;
    index: number;
}

let activeMarker: google.maps.marker.AdvancedMarkerElement | null = null;

export async function runMasterSequence(
    params: RunMasterSequenceParams,
    state: TripStateInstance,
    setSidebarItems: React.Dispatch < React.SetStateAction < SidebarItemData[] >> ,
    setHomesItems: React.Dispatch < React.SetStateAction < any[] >> ,
	setPlacesItems: React.Dispatch<React.SetStateAction<any[]>>,
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

    // --- Route 0 Execution (with CSV Fallback) ---
    let fileData0 = null;
    if (params.tripId) {
        try {
            const routeRes = await fetch(`/api/routes/${params.tripId}/0`, {
                signal
            });
            if (routeRes.ok) {
                fileData0 = await routeRes.json();
            }
        } catch (error) {
            console.warn("API route failed, trying CSV fallback:", error);
        }
    }

    // Fallback to legacy CSV tracking if API data could not be built
    if ((!fileData0 || !fileData0.origin) && params.TripRoute) {
        fileData0 = await loadRouteFromCSV(params.TripRoute);
    }

    if (fileData0 && fileData0.origin && !signal.aborted) {
        await computeAndDrawRoute(fileData0, state, currentMap, signal);
    }

    if (signal.aborted)
        return;

    // --- Route 1 Execution ---
    if (params.TripRoute1) {
        const fileData1 = await loadRouteFromCSV(params.TripRoute1);
        if (signal.aborted)
            return;

        if (fileData1 && fileData1.origin && fileData1.destination) {
            await computeAndDrawRoute(fileData1, state, currentMap, signal);
        }
        if (signal.aborted)
            return;
    }

    // --- Sidebar Markers ---
    if (params.TripDetails !== '0000Trip.csv') {
        const structuralData = await parseSidebarCSVAndBuildMarkers(currentMap, params.TripDetails, state, libs, signal);
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
            intermediates: routeData.intermediates.map((waypoint: any) => ({
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
    state: TripStateInstance,
    activeLibs: GoogleLibs,
    signal: AbortSignal): Promise < SidebarItemData[] > {
    const parsedItems: SidebarItemData[] = [];
    try {
        const response = await fetch(detailsPath, {
            signal
        });
        if (signal.aborted || !response.ok)
            return [];

        const csvText = await response.text();
        const rows = csvText.split('\n').slice(1);

        rows.forEach((row, i) => {
            const trimmedRow = row.trim();
            if (!trimmedRow)
                return;

            const cols = trimmedRow.split(',');
            const lat = parseFloat(cols[0]);
            const lng = parseFloat(cols[1]);

            const details: TripDetails = {
                title: cols[2] || '',
                description: cols[3] || '',
                image: cols[4] || '',
                type: cols[5] || '',
                index: i + 1,
            };

            const updatedTitle: string = details.title.replaceAll("<br />", ". ");

            if (!isNaN(lat) && !isNaN(lng)) {
                const position = {
                    lat,
                    lng
                };
                const markerContentElement = buildMarkerUI(details);

                const marker = new activeLibs.AdvancedMarkerElement({
                    position,
                    title: updatedTitle,
                    content: markerContentElement,
                    gmpClickable: true,
                });

                const id = (i + 1).toString();
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

    } catch (error) {
        console.error('Error loading or parsing Trip metadata file:', error);
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
        faCampground
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
        container.innerHTML = `<div class="icon">${iconHtml}</div> <div class="${detailsClass}"> <div class="description">${details.title}</div> </div>`;
    } else {
        container.innerHTML = `<div class="icon" style="color: black;">${iconHtml}</div> <div class="${detailsClass}"> <a href="/slideshow?showId=${details.image}" target="_blank"> <img id="myImage-${details.index}" src="images/s-${details.image}.jpg" width="60" height="60" data-image="${details.image}" class="center-block"> </a> <div class="description">${details.title}</div> </div>`;
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

function buildHomeMarkers(
    currentMap: any,
    homes: any[],
    state: TripStateInstance,
    activeLibs: GoogleLibs,
    signal: AbortSignal) {
    homes.forEach((home, i) => {
        const lat = parseFloat(home.lat);
        const lng = parseFloat(home.lng);
        const id = (home.id || i + 1).toString();

        if (!isNaN(lat) && !isNaN(lng)) {
            const position = {
                lat,
                lng
            };
            const markerContentElement = buildHomeMarkerUI(home, i + 1);

            const marker = new activeLibs.AdvancedMarkerElement({
                position,
                title: home.address,
                content: markerContentElement,
                gmpClickable: true,
            });

            state.markerRegistry[id] = marker;

            markerContentElement.addEventListener("click", () => {
                currentMap.setZoom(18);
                currentMap.setCenter(position);
                toggleHighlight(marker);
            });

            state.markers.push(marker);
        }
    });

    if (signal.aborted) {
        state.markers.forEach(m => m.map = null);
        return;
    }

    const clustererInstance = new MarkerClusterer({
        map: currentMap
    });
    clustererInstance.addMarkers(state.markers);
    state.markerCluster = clustererInstance;
}

function buildHomeMarkerUI(details: any, index: number): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "property";

    const cleanVariable = (details.type || '').trim();
    const iconMap: Record < string,
    any >  = {
        faHospitalUser,
        faHouseUser,
        faSchool,
        faCaravan,
    };

    const selectedIcon = iconMap[cleanVariable] || faHouseUser;
    const iconHtml = faIcon(selectedIcon).html[0];

    container.innerHTML = `
        <div class="icon">
            <i>${iconHtml}</i> ${details.index || index}
        </div>
        <div class="details">
            <div class="address" style="font-size: 24px;">${details.address}</div>
            <div class="dates">From: ${details.from} To: ${details.to}</div>
            <div class="description">${details.description}</div>
        </div>
	`;

    return container;
}
