"use client";

import { importLibrary } from "@googlemaps/js-api-loader";

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
