"use client";

export let markerCluster: any = null;
export let markers: google.maps.marker.AdvancedMarkerElement[] = [];
export let markerRegistry: Record < string, google.maps.marker.AdvancedMarkerElement >  = {};
export let mapPolylines: google.maps.Polyline[] = [];

export function resetMarkerClusterer(): void {
    if (markerCluster) {
        if (typeof markerCluster.clearMarkers === "function") {
            markerCluster.clearMarkers();
        }
		if (typeof markerCluster.setMap === "function") {
			markerCluster.setMap(null);
		}
        markerCluster = null;
    }
    markers = [];
    markerRegistry = {};
}

export function getPolylines(): google.maps.Polyline[]{
    return mapPolylines;
}

export function setMarkerCluster(cluster: any) {
    markerCluster = cluster;
}

export function clearPolylines(): void {
    mapPolylines = [];
}
