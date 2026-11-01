let VoyagePath: google.maps.Polyline | null = null;

export async function ShowShipVoyage(myMap: google.maps.Map): Promise<void> {

  myMap.panTo({ lat: 48.327806522220335, lng: -38.378272970276264 });
  myMap.setZoom(4);

  const ShipVoyageCoordinates = [
    { lat: 45.5026645, lng: -73.5520918 },
    { lat: 45.5295907, lng: -73.5401408 },
    { lat: 46.343, lng: -72.543 },
    { lat: 46.813, lng: -71.207 },
    { lat: 47.2596447, lng: -70.4336222 },
    { lat: 47.6668793, lng: -69.8769674 },
    { lat: 48.110162, lng: -69.5040452 },
    { lat: 48.972675, lng: -67.9017156 },
    { lat: 49.497476, lng: -65.6377363 },
    { lat: 49.4533949, lng: -64.3820272 },
    { lat: 47.23, lng: -60.0 },
    { lat: 45.7172555, lng: -54.7907909 },
    { lat: 49.3427704, lng: -5.3193457 },
    { lat: 50.1124098, lng: -1.6446933 },
    { lat: 50.6491664, lng: 1.0175619 },
    { lat: 51.4063219, lng: 1.8299414 },
    { lat: 51.4865872, lng: 0.8882743 },
    { lat: 51.4937707, lng: 0.4771422 },
    { lat: 51.4563682, lng: 0.4391925 },
    { lat: 51.4482383, lng: 0.3746479 },
    { lat: 51.4491911, lng: 0.343607 },
    { lat: 51.4550548, lng: 0.3343656 },
    { lat: 51.4542525, lng: 0.350516 },
  ];

  VoyagePath = new google.maps.Polyline({
    path: ShipVoyageCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
  VoyagePath.setMap(myMap);
}

export function getVoyagePath() {
  return VoyagePath;
}
