import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

export let gMap: google.maps.Map | null = null;

if (typeof window !== "undefined") {
  setOptions({
    key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE",
    v: "weekly",
  });
}

export async function initMap(mapElement: HTMLDivElement) {
  if (typeof window === "undefined") return;

  try {
    const { Map } = await importLibrary("maps");

    gMap = new Map(mapElement, {
      center: { lat: 46.2229104, lng: -64.5333937 },
      zoom: 18,
      mapTypeId: "hybrid",
      mapId: "4504f8b37365c3d0",
    });
  } catch (error) {
    console.error("Failed to load Google Maps API:", error);
  }
}
