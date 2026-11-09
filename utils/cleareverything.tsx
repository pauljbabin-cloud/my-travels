
import { resetHomesClusterer } from "./showhomes.tsx";
import { getVoyagePath } from "./showshipvoyage.tsx";
import { getFlightPath } from "./showheathrowtorontoflight.tsx";
import { getArgentiaFerry } from "./ferry.tsx";
import { TripStateInstance, resetMarkerClusterer, clearPolylines } from "./tripState.tsx";

export async function ClearEverything(
    myMap: google.maps.Map | null,
    state? : TripStateInstance): Promise < void > {
    if (typeof window === "undefined")
        return;

    resetHomesClusterer();

    if (state) {
        clearPolylines(state);
        resetMarkerClusterer(state);
    }

    const VoyagePath = getVoyagePath();
    if (VoyagePath)
        VoyagePath.setMap(null);

    const FlightPath = getFlightPath();
    if (FlightPath)
        FlightPath.setMap(null);

    const FerryPath = getArgentiaFerry();
    if (FerryPath)
        FerryPath.setMap(null);
}
