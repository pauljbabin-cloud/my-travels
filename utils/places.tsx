import { TripParams } from "./types";
import { TripStateInstance } from "./tripState";
import { toggleHighlight } from "./runMasterSequence";
import { importLibrary } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { faHouseUser, faCamera } from '@fortawesome/free-solid-svg-icons';


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

    const cleanType = (details.type || "").trim();
    let iconHtml = "";

    // Map supported Font Awesome icon names to their imported definitions
    const faIconsMap: Record<string, any> = {
        faHouseUser,
        faCamera,
    };

    if (faIconsMap[cleanType]) {
        const adjustedIcon = faIcon(faIconsMap[cleanType], {
            styles: {
                color: 'black',
                'font-size': '2em'
            },
            attributes: {
                'aria-hidden': 'true'
            },
        });
        iconHtml = adjustedIcon.html[0];
    } else {
        // Normalize the type/region code to uppercase (e.g., "ca-nb" -> "CA-NB", "us-me" -> "US-ME", "ca" -> "CA")
        // Falls back to "UN" (United Nations) or "XX" if empty
        const regionCode = (cleanType || "UN").toUpperCase();

        // Load the SVG from jsDelivr (or change path to `/flags/${regionCode}.svg` if copied to public/flags/)
        const flagUrl = `/flags/${regionCode}.svg`;

        iconHtml = `<img src="${flagUrl}" alt="${regionCode} flag" width="24" height="16" style="border-radius: 2px; object-fit: cover; display: block;" onerror="this.onerror=null;this.src='https://jsdelivr.net';" />`;
    }

    const detailsClass = 'details';

    if (details.image === 'blank') {
        container.innerHTML = `<div class="icon">${iconHtml}</div> <div class="${detailsClass}"> <div class="description">${details.title}</div> </div>`;
    } else {
        container.innerHTML = `<div class="icon">${iconHtml}</div> <div class="${detailsClass}"> <a href="/slideshow?showId=${details.image}" target="_blank"> <img id="myImage-${details.index || fallbackIndex}" src="images/s-${details.image}.jpg" width="60" height="60" data-image="${details.image}" class="center-block"> </a> <div class="description">${details.title}</div> </div>`;
    }

    return container;
}
