

let ArgentiaFerry: google.maps.Polyline | null = null;

export async function ArgentiaFerryRoute(myMap: google.maps.Map): Promise<void> {
  const ShipVoyageCoordinates = [
    { lat: 46.2108844, lng: -60.2439755 },
    { lat: 46.2070306, lng: -60.2391599 },
    { lat: 46.2069786, lng: -60.2348845 },
    { lat: 46.2091069, lng: -60.230234 },
    { lat: 46.2277906, lng: -60.2058563 },
    { lat: 46.2407238, lng: -60.1907005 },
    { lat: 46.2728458, lng: -60.1338301 },
    { lat: 46.3486455, lng: -59.9283757 },
    { lat: 46.3989404, lng: -59.42004 },
    { lat: 46.23513, lng: -57.4089745 },
    { lat: 46.1941007, lng: -56.139088 },
    { lat: 46.2658818, lng: -55.6400275 },
    { lat: 46.4767308, lng: -55.1579996 },
    { lat: 47.1872969, lng: -54.152835 },
    { lat: 47.2859345, lng: -54.0375773 },
    { lat: 47.2859345, lng: -54.0368899 },
    { lat: 47.3215172, lng: -54.01558 },
    { lat: 47.3243355, lng: -54.0040085 },
    { lat: 47.326133, lng: -53.9840463 },
    { lat: 47.3255339, lng: -53.977957 },
    { lat: 47.323287, lng: -53.9717695 },
    { lat: 47.3193422, lng: -53.966736 },
    { lat: 47.3153805, lng: -53.9648699 },
    { lat: 47.3109357, lng: -53.9646489 },
    { lat: 47.3069235, lng: -53.965803 },
    { lat: 47.3006797, lng: -53.9724079 },
    { lat: 47.2916129, lng: -53.986934 },
    { lat: 47.2903551, lng: -53.9905028 },
    { lat: 47.2902148, lng: -53.9919822 },
  ];

  ArgentiaFerry = new google.maps.Polyline({
    path: ShipVoyageCoordinates,
    geodesic: true,
    strokeColor: "#274BC2",
    strokeOpacity: 1.0,
    strokeWeight: 6,
  });
  
  ArgentiaFerry.setMap(myMap);
}

export function getArgentiaFerry() {
  return ArgentiaFerry;
}
