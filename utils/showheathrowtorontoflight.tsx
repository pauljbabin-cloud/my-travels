

let FlightPath: google.maps.Polyline | null = null;

export async function ShowHeathrowTorontoFlight(myMap: google.maps.Map): Promise<void> {
  const FlightCoordinates = [
    { lat: 51.4649178, lng: -0.4833946 },
    { lat: 43.6839723, lng: -79.6502689 },
  ];

  FlightPath = new google.maps.Polyline({
    path: FlightCoordinates,
    geodesic: true,
    strokeColor: "#0288D1",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
  FlightPath.setMap(myMap);
}

export function getFlightPath() {
  return FlightPath;
}
