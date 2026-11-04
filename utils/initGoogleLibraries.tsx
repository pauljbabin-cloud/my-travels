"use client";

import { importLibrary } from "@googlemaps/js-api-loader";

export interface GoogleLibs {
    AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement;
    PolylineClass: typeof google.maps.Polyline;
    decodePath: (encodedPath: string) => google.maps.LatLng[];
}

export async function initGoogleLibraries(): Promise < GoogleLibs | null > {
    if (typeof window === "undefined")
        return null;

    const [{
            AdvancedMarkerElement
        }, {
            Polyline
        }, {
            encoding
        }
    ] = await Promise.all([
                importLibrary("marker")as Promise < google.maps.MarkerLibrary > ,
                importLibrary("maps")as Promise < google.maps.MapsLibrary > ,
                importLibrary("geometry")as Promise < google.maps.GeometryLibrary > ,
            ]);

    return {
        AdvancedMarkerElement,
        PolylineClass: Polyline,
        decodePath: encoding.decodePath
    };
}
