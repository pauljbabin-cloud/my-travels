// showhomes
import { HomeDetails, TripParams } from "./types";
import { TripStateInstance } from "./tripState";
import { toggleHighlight } from "./runMasterSequence";
import { importLibrary } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { faHospitalUser, faHouseUser, faSchool, faCaravan } from '@fortawesome/free-solid-svg-icons';

export async function ShowHomes(
    params: { TripMap: google.maps.Map | null }, 
    state: TripStateInstance,
    setHomesItems: React.Dispatch<React.SetStateAction<any[]>>,
    signal: AbortSignal
	): Promise<void> {
    const myMap = params.TripMap;
    if (typeof window === "undefined" || !myMap)
        return;

    myMap.panTo({
        lat: 46.2229104,
        lng: -64.5333937
    });
    myMap.setZoom(18);

    let loadedHomes: any[] = [];

    // 1. Try fetching from API first
    try {
        const apiResponse = await fetch('/api/homes', {
            signal
        });
        if (apiResponse.ok) {
            loadedHomes = await apiResponse.json();
        }
    } catch (error) {
        if (signal.aborted)
            return;
        console.warn("API /api/homes failed, falling back to CSV:", error);
    }

    if (signal.aborted)
        return;

    // 2. Fallback to /csvs/homes.csv if API failed or returned empty
    if (!loadedHomes || loadedHomes.length === 0) {
        try {
            const baseUrl = window.location.origin;
            const csvResponse = await fetch(`${baseUrl}/csvs/homes.csv`, {
                signal
            });

            if (!csvResponse.ok) {
                console.error(`Failed to fetch CSV fallback. Status: ${csvResponse.status}`);
                return;
            }

            const csvText = await csvResponse.text();
            const rows = csvText.split(/\r?\n/).slice(1).filter(row => row.trim() !== "");

            loadedHomes = rows.map((row, i) => {
                const cols = row.split(",");
                if (cols.length < 8)
                    return null;

                return {
                    id: (i + 1).toString(),
                    lat: parseFloat(cols[0]),
                    lng: parseFloat(cols[1]),
                    address: cols[2],
                    from: cols[3],
                    to: cols[4],
                    description: cols[5],
                    type: cols[6],
					image: cols[7],
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
        const { AdvancedMarkerElement } = await importLibrary("marker")as google.maps.MarkerLibrary;
        if (signal.aborted)
            return;

        loadedHomes.forEach((home, i) => {
            const lat = parseFloat(home.lat);
            const lng = parseFloat(home.lng);
            const id = (home.id || i + 1).toString();

            if (!isNaN(lat) && !isNaN(lng)) {
                const position = {
                    lat,
                    lng
                };
                const markerContentElement = buildContent(home, i + 1);

                const marker = new AdvancedMarkerElement({
                    position,
                    title: home.address,
                    content: markerContentElement,
                    gmpClickable: true,
                });

                state.markerRegistry[id] = marker;

                markerContentElement.addEventListener("click", () => {
                    myMap.setZoom(18);
                    myMap.setCenter(position);
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
            map: myMap
        });
        clustererInstance.addMarkers(state.markers);
        state.markerCluster = clustererInstance;

        setHomesItems(loadedHomes);
    } catch (error) {
        console.error("Error rendering home markers:", error);
    }
}

function buildContent(details: any, fallbackIndex: number): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "property";

    const cleanVariable = (details.type || "").trim();
    const iconMap: Record < string,
    typeof faHouseUser >  = {
        faHospitalUser,
        faHouseUser,
        faSchool,
        faCaravan,
    };

    const selectedIcon = iconMap[cleanVariable] || faHouseUser;
    const iconHtml = faIcon(selectedIcon).html[0];

    container.innerHTML = `<div class="icon">
        <i>${iconHtml}</i> ${details.index || fallbackIndex}
    </div>
    <div class="details">
        <div class="address" style="font-size: 24px;">${details.address}</div>
        <div class="dates">From: ${details.from} To: ${details.to}</div>
        <div class="description">${details.description}</div>
    </div>`;

    return container;
}

export function panToHomeMarker(id: string | number, myMap: google.maps.Map, state ?  : TripStateInstance) {
    const targetMarker = state?.markerRegistry[id.toString()];
    if (targetMarker && targetMarker.position) {
        myMap.panTo(targetMarker.position);
        myMap.setZoom(18);
        toggleHighlight(targetMarker);
    }
}
