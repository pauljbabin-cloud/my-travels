import { getVoyagePath } from "./showshipvoyage";
import { getFlightPath } from "./showheathrowtorontoflight";
import { getArgentiaFerry } from "./ferry";
import { TripStateInstance, resetMarkerClusterer, clearPolylines } from "./tripState";

export async function ClearEverything(
    myMap: google.maps.Map | null,
    state? : TripStateInstance): Promise < void > {
    if (typeof window === "undefined")
        return;

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
