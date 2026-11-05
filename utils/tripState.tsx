

export interface TripStateInstance {
    markerCluster: any;
    markers: google.maps.marker.AdvancedMarkerElement[];
    markerRegistry: Record < string,
    google.maps.marker.AdvancedMarkerElement > ;
    mapPolylines: google.maps.Polyline[];
}

export function createTripState(): TripStateInstance {
    return {
        markerCluster: null,
        markers: [],
        markerRegistry: {},
        mapPolylines: [],
    };
}

export function resetMarkerClusterer(state: TripStateInstance): void {
    if (state.markerCluster) {
        if (typeof state.markerCluster.clearMarkers === "function") {
            state.markerCluster.clearMarkers();
        }
        if (typeof state.markerCluster.setMap === "function") {
            state.markerCluster.setMap(null);
        }
        state.markerCluster = null;
    }

    state.markers.forEach((marker) => {
        if (marker)
            marker.map = null;
    });
    state.markers = [];

    Object.keys(state.markerRegistry).forEach((key) => {
        delete state.markerRegistry[key];
    });
}

export function clearPolylines(state: TripStateInstance): void {
    state.mapPolylines.forEach((polyline) => {
        if (polyline)
            polyline.setMap(null);
    });
    state.mapPolylines = [];
}
