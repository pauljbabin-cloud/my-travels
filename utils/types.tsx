export interface TripParams {
  TripMap: google.maps.Map | null;
  TripHTML: string;
  tripId?: string;
  tripYear?: string; 
  TripRoute: string;
  TripDetails: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onHomesLoaded?: (homes: any[]) => void;
}

export interface HomeDetails {
  address: string;
  from: string;
  to: string;
  description: string;
  type: string;
  index: number;
}
