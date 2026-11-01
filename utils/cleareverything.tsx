import { resetHomesClusterer } from "./showhomes";
import { getVoyagePath } from "./showshipvoyage";
import { getFlightPath } from "./showheathrowtorontoflight";
import { getArgentiaFerry } from "./ferry";
import { resetMarkerClusterer, getPolylines, clearPolylines } from "./tripState"; 

export async function ClearEverything(myMap: google.maps.Map | null): Promise<void> {
  if (typeof window === "undefined") return;

  resetHomesClusterer();
  resetMarkerClusterer();
  
  if (myMap) {
    getPolylines().forEach(polyline => polyline.setMap(null));
    clearPolylines();
  }

  const VoyagePath = getVoyagePath();
  if (VoyagePath) VoyagePath.setMap(null);

  const FlightPath = getFlightPath();
  if (FlightPath) FlightPath.setMap(null);

  const FerryPath = getArgentiaFerry();
  if (FerryPath) FerryPath.setMap(null);
}
