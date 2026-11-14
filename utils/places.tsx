import { TripParams } from "./types.tsx";
import { TripStateInstance } from "./tripState.tsx";
import { toggleHighlight } from "./runMasterSequence.tsx";
import { importLibrary } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faCampground, faFontAwesome, faHouseUser, faBed, faSchool, faCaravan } from '@fortawesome/free-solid-svg-icons';

export async function Places(
    params: {
        TripMap: google.maps.Map | null
    },
    state: TripStateInstance,
    setPlacesItems: React.Dispatch<React.SetStateAction<any[]>>,
    signal: AbortSignal
): Promise<void> {
    const myMap = params.TripMap;
    if (typeof window === "undefined" || !myMap)
        return;

    const { Geocoder } = await google.maps.importLibrary("geocoding");
    const geocoder = new Geocoder();

    myMap.panTo({
        lat: 45.177953753536876,
        lng: -52.42747407873573
    });
    myMap.setZoom(3);

    let loadedPlaces: any[] = [];

    // 1. Try fetching from API first
    try {
        const apiResponse = await fetch('/api/places', {
            signal
        });
        if (apiResponse.ok) {
            loadedPlaces = await apiResponse.json();
        }
    } catch (error) {
        if (signal.aborted)
            return;
        console.warn("API /api/places failed, falling back to CSV:", error);
    }

    if (signal.aborted)
        return;

    // 2. Fallback to /csvs/places.csv if API failed or returned empty
    if (!loadedPlaces || loadedPlaces.length === 0) {
        try {
            const baseUrl = window.location.origin;
            const csvResponse = await fetch(`${baseUrl}/csvs/places.csv`, {
                signal
            });

            if (!csvResponse.ok) {
                console.error(`Failed to fetch CSV fallback. Status: ${csvResponse.status}`);
                return;
            }

            const csvText = await csvResponse.text();
            const rows = csvText.split(/\r?\n/).slice(1).filter(row => row.trim() !== "");

            loadedPlaces = rows.map((row, i) => {
                const cols = row.split(",");
                if (cols.length < 4)
                    return null;

                return {
                    id: (i + 1).toString(),
                    address: cols[0],
                    title: cols[1],
                    image: cols[2],
                    type: cols[3],
                    // Optional: supports lat/lng if added as columns 5 & 6 later
                    lat: cols[4] ? parseFloat(cols[4]) : undefined,
                    lng: cols[5] ? parseFloat(cols[5]) : undefined,
                    index: i + 1,
                };
            }).filter(Boolean);
        } catch (error) {
            if (!signal.aborted) {
                console.error("Error loading or parsing CSV fallback:", error);
            }
            return;
        }
    }

    if (signal.aborted)
        return;

    // 3. Build markers using the shared TripStateInstance
    try {
        const { AdvancedMarkerElement } = await importLibrary("marker") as google.maps.MarkerLibrary;
        if (signal.aborted)
            return;

        const BATCH_SIZE = 8;

        for (let i = 0; i < loadedPlaces.length; i += BATCH_SIZE) {
            if (signal.aborted) {
                state.markers.forEach(m => m.map = null);
                return;
            }

            const batch = loadedPlaces.slice(i, i + BATCH_SIZE);
            let madeNetworkCall = false;

            await Promise.all(
                batch.map(async (place, batchIndex) => {
                    const overallIndex = i + batchIndex;
                    let position: google.maps.LatLngLiteral | null = null;

                    // Use pre-saved coordinates if available
                    if (place.lat != null && place.lng != null && !isNaN(Number(place.lat)) && !isNaN(Number(place.lng))) {
                        position = {
                            lat: Number(place.lat),
                            lng: Number(place.lng)
                        };
                    } else {
                        // Otherwise use localStorage cache or geocode
                        const cacheKey = `geo_${place.address.trim().toLowerCase()}`;
                        if (!localStorage.getItem(cacheKey)) {
                            madeNetworkCall = true;
                        }
                        position = await getCoordinates(geocoder, place.address);
                    }

                    if (!position || signal.aborted)
                        return;

                    const id = (place.id || overallIndex + 1).toString();
                    const markerContentElement = buildContent(place, overallIndex + 1);

                    const marker = new AdvancedMarkerElement({
                        position,
                        title: place.title,
                        content: markerContentElement,
                        gmpClickable: true,
                    });

                    state.markerRegistry[id] = marker;

                    markerContentElement.addEventListener("click", () => {
                        myMap.setZoom(18);
                        myMap.setCenter(position!);
                        toggleHighlight(marker);
                    });

                    state.markers.push(marker);
                })
            );

            // Only pause if actual Google Geocoding API calls were made in this batch
            if (madeNetworkCall && i + BATCH_SIZE < loadedPlaces.length) {
                await new Promise((resolve) => setTimeout(resolve, 200));
            }
        }

        if (signal.aborted) {
            state.markers.forEach(m => m.map = null);
            return;
        }

        const clustererInstance = new MarkerClusterer({
            map: myMap
        });
        clustererInstance.addMarkers(state.markers);
        state.markerCluster = clustererInstance;

        setPlacesItems(loadedPlaces);
    } catch (error) {
        console.error("Error rendering place markers:", error);
    }
}

async function getCoordinates(
    geocoder: google.maps.Geocoder,
    address: string
): Promise<google.maps.LatLngLiteral | null> {
    const cacheKey = `geo_${address.trim().toLowerCase()}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        try {
            return JSON.parse(cached);
        } catch {
            localStorage.removeItem(cacheKey);
        }
    }

    try {
        const { results } = await geocoder.geocode({ address });
        if (results && results.length > 0) {
            const coords = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
            };
            localStorage.setItem(cacheKey, JSON.stringify(coords));
            return coords;
        }
    } catch (e) {
        console.warn(`Geocoding failed for ${address}:`, e);
    }
    return null;
}

function buildContent(details: any, fallbackIndex: number): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "property";

    const cleanVariable = (details.type || "").trim();
    const iconMap: Record<string, typeof faHouseUser> = {
        faCamera,
        faCampground,
        faFontAwesome,
        faHouseUser,
        faBed,
        faSchool,
        faCaravan,
    };

    const selectedIcon = iconMap[cleanVariable] || faHouseUser;
    const iconHtml = faIcon(selectedIcon).html[0];
    const detailsClass = 'details';

    if (details.image === 'blank') {
        container.innerHTML = `<div class="icon">${iconHtml}</div> <div class="${detailsClass}"> <div class="description">${details.title}</div> </div>`;
    } else {
        container.innerHTML = `<div class="icon" style="color: black;">${iconHtml}</div> <div class="${detailsClass}"> <a href="/slideshow?showId=${details.image}" target="_blank"> <img id="myImage-${details.index}" src="images/s-${details.image}.jpg" width="60" height="60" data-image="${details.image}" class="center-block"> </a> <div class="description">${details.title}</div> </div>`;
    }

    return container;
}
