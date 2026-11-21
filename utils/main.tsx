"use client";

import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { icon as faIcon } from "@fortawesome/fontawesome-svg-core";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { toggleHighlight } from "./runMasterSequence";

declare global {
	interface Window {
		__googleMapsOptionsSet?: boolean;
	}
}

export let gMap: google.maps.Map | null = null;
let initialMarker: google.maps.marker.AdvancedMarkerElement | null = null;

function ensureGoogleMapsOptions(): void {
	if (typeof window !== "undefined" && !window.__googleMapsOptionsSet) {
		setOptions({
			key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE",
			v: "weekly",
		});
		window.__googleMapsOptionsSet = true;
	}
}

export function clearInitialMarker(): void {
	if (initialMarker) {
		initialMarker.map = null;
		initialMarker = null;
	}
}

export async function initMap(mapElement: HTMLDivElement): Promise<void> {
	if (typeof window === "undefined") return;

	ensureGoogleMapsOptions();

	try {
		const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
			importLibrary("maps") as Promise<google.maps.MapsLibrary>,
			importLibrary("marker") as Promise<google.maps.MarkerLibrary>,
		]);

		gMap = new Map(mapElement, {
			center: {
				lat: 46.2229104,
				lng: -64.5333937,
			},
			zoom: 18,
			mapTypeId: "hybrid",
			mapId: "51c7b615f7c323bbfc90e214",
			isFractionalZoomEnabled: true,
		});

		clearInitialMarker();

		const adjustedIcon = faIcon(faHouseUser, {
			styles: {
				color: "black",
				"font-size": "2em",
			},
			attributes: {
				"aria-hidden": "true",
			},
		});
		const iconHtml = adjustedIcon.html[0];

		const currentHome = document.createElement("div");
		currentHome.className = "property";
		currentHome.innerHTML = `<div class="icon">${iconHtml}</div> 
			<div class="details"> 
				<div class="description"></div> 
				<div class="address" style="font-size: 24px;">Pascal Poirier Manor</div>
				<div class="description">366 Pascal-Piorier St. Shediac</div>
			</div>`;

		initialMarker = new AdvancedMarkerElement({
			map: gMap,
			position: {
				lat: 46.2229104,
				lng: -64.5333937,
			},
			title: "Pascal Poirier Manor",
			content: currentHome,
			gmpClickable: true,
		});

		currentHome.addEventListener("click", () => {
			gMap?.setZoom(18);
			gMap?.setCenter({
				lat: 46.2229104,
				lng: -64.5333937,
			});
			if (initialMarker) {
				toggleHighlight(initialMarker);
			}
		});

	} catch (error) {
		console.error("Failed to load Google Maps API:", error);
	}
}
