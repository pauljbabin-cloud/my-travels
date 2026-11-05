"use client";

import { HomeDetails } from "./types";
import { importLibrary } from "@googlemaps/js-api-loader";
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { faHospitalUser, faHouseUser, faSchool, faCaravan } from '@fortawesome/free-solid-svg-icons';

let markers: google.maps.marker.AdvancedMarkerElement[] = [];
let activeMarker: google.maps.marker.AdvancedMarkerElement | null = null;
let markerCluster: any = null;
let markerRegistry: Record < number, google.maps.marker.AdvancedMarkerElement >  = {};

export async function ShowHomes(myMap: google.maps.Map, onHomesLoaded ?  : (homes: HomeDetails[]) => void) {

    if (typeof window === "undefined" || typeof document === "undefined")
        return;

    myMap.panTo({
        lat: 46.2229104,
        lng: -64.5333937
    });
    myMap.setZoom(18);

    const SHcontent = document.createElement("div");
    SHcontent.id = "IDShowHomes";

    const newUl = document.createElement("ol");
    newUl.className = "flexible-list";
    SHcontent.appendChild(newUl);

    if (typeof window === "undefined" || typeof document === "undefined")
        return;

    myMap.panTo({
        lat: 46.2229104,
        lng: -64.5333937
    });
    myMap.setZoom(18);

    resetHomesClusterer();

    try {
        const { AdvancedMarkerElement } = await importLibrary("marker")as google.maps.MarkerLibrary;

        const response = await fetch("/csvs/homes.csv");
        const csvText = await response.text();
		const rows = csvText.split(/\r?\n/).slice(1).filter(row => row.trim() !== "");
        const loadedHomes: HomeDetails[] = [];
		
        rows.forEach((row, i) => {
            const cols = row.split(",");
            if (cols.length < 7)
                return;

            const lat = parseFloat(cols[0]);
            const lng = parseFloat(cols[1]);

            const details: HomeDetails = {
                address: cols[2],
                from: cols[3],
                to: cols[4],
                description: cols[5],
                type: cols[6],
                index: i + 1,
            };

            if (!isNaN(lat) && !isNaN(lng)) {
                const position = {
                    lat,
                    lng
                };
                const markerContentElement = buildContent(details);

                const marker = new AdvancedMarkerElement({
                    position,
                    title: details.address,
                    content: markerContentElement,
                    gmpClickable: true,
                });

                const id = i + 1;
                markerRegistry[id] = marker;

                markerContentElement.addEventListener("click", () => {
                    myMap.setZoom(18);
                    myMap.setCenter(position);
                    toggleHighlight(marker);
                });

                markers.push(marker);
                loadedHomes.push(details);
				
            }
        });

        const { MarkerClusterer } = await import("@googlemaps/markerclusterer");
        markerCluster = new MarkerClusterer({
            map: myMap
        });
        markerCluster.addMarkers(markers);
console.log(loadedHomes);
        if (onHomesLoaded) {
            onHomesLoaded(loadedHomes);
        }

    } catch (error) {
        console.error("Error loading or parsing CSV file:", error);
    }

    function toggleHighlight(clickedMarker: google.maps.marker.AdvancedMarkerElement) {
        const content = clickedMarker.content as HTMLElement;
        if (!content)
            return;

        if (content.classList.contains("highlight")) {
            content.classList.remove("highlight");
            clickedMarker.zIndex = null;
            activeMarker = null;
        } else {
            if (activeMarker && activeMarker !== clickedMarker) {
                (activeMarker.content as HTMLElement).classList.remove("highlight");
                activeMarker.zIndex = null;
            }
            content.classList.add("highlight");
            clickedMarker.zIndex = 1;
            activeMarker = clickedMarker;
        }
    }

    function buildContent(details: HomeDetails): HTMLDivElement {
        const container = document.createElement("div");
        container.className = "property";

        const cleanVariable = details.type.trim();

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
			<i>${iconHtml}</i> ${details.index}
		</div>
		<div class="details">
			<div class="address" style="font-size: 24px;">${details.address}</div>
			<div class="dates">From: ${details.from} To: ${details.to}</div>
		<div class="description">${details.description}</div>
    </div>`;

        return container;
    }
}

export function resetHomesClusterer() {
    if (markerCluster) {
        if (typeof markerCluster.clearMarkers === "function") {
            markerCluster.clearMarkers();
        }
        markerCluster.setMap(null);
        markerCluster = null;
    }
    markers = [];
    markerRegistry = {};
}

export function panToHomeMarker(id: number, myMap: google.maps.Map) {
    const targetMarker = markerRegistry[id];
    if (targetMarker && targetMarker.position) {
        myMap.panTo(targetMarker.position);
        myMap.setZoom(18);
    }
}
