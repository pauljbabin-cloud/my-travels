

import { TripStateInstance, resetMarkerClusterer, clearPolylines } from "./tripState";
import { initGoogleLibraries } from "@/utils/initGoogleLibraries";
import { loadRouteFromCSV } from "@/utils/loadRouteFromCSV";
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { faGasPump, faCamera, faBed, faCampground } from '@fortawesome/free-solid-svg-icons';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { ShowHomes } from "./showhomes";

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
    TripRoute: any;
    TripRoute1: any;
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

        await ShowHomes(currentMap, (loadedHomes) => {
            if (!signal.aborted) {
                const parsedHomes = loadedHomes.map((home) => ({
                            id: home.index,
                            address: home.address
                        }));
                setHomesItems(parsedHomes);
            }
        });
        return;
    }

    const fileData0 = await loadRouteFromCSV(params.TripRoute);
    if (signal.aborted)
        return;

    if (fileData0 && fileData0.origin && fileData0.destination) {
        await computeAndDrawRoute(fileData0, state, currentMap, signal);
    } else {
        return;
    }

    if (signal.aborted)
        return;

    if (params.TripRoute1 !== null) {
        const fileData1 = await loadRouteFromCSV(params.TripRoute1);
        if (signal.aborted)
            return;

        if (fileData1 && fileData1.origin && fileData1.destination) {
            await computeAndDrawRoute(fileData1, state, currentMap, signal);
        }
        if (signal.aborted)
            return;
    }

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
    }
}

async function computeAndDrawRoute(routeData: any, state: TripStateInstance, currentMap: any, signal: AbortSignal) {
    const { Route } = await google.maps.importLibrary('routes');
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
            travelMode: routeData.travelMode,
            routingPreference: routeData.routingPreference,
            routeModifiers: routeData.routeModifiers,
            fields: ['path', 'legs'],
        };

        const { routes } = await Route.computeRoutes(RouteRequest as any);
        if (signal.aborted)
            return;

        if (routes && routes.length > 0) {
            const lines = routes[0].createPolylines();
            lines.forEach((polyline) => {
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
    const iconHtml = faIcon(selectedIcon).html[0];
    const detailsClass = 'details';

    if (details.image === 'blank') {
        container.innerHTML = `<div class="icon">${iconHtml}</div> <div class="${detailsClass}"> <div class="description">${details.title}</div> </div>`;
    } else {
        container.innerHTML = `<div class="icon">${iconHtml}</div> <div class="${detailsClass}"> <a href="/slideshow?showId=${details.image}" target="_blank"> <img id="myImage-${details.index}" src="images/s-${details.image}.jpg" width="60" height="60" data-image="${details.image}" class="center-block"> </a> <div class="description">${details.title}</div> </div>`;
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
