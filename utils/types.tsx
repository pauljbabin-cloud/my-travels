export interface TripParams {
  TripMap: google.maps.Map | null;
  TripHTML: string;
  tripId?: string;
  TripRoute: string;
  TripRoute1: string;
  TripDetails: string;
  initialCenter?: google.maps.LatLngLiteral; // Added
  initialZoom?: number;                      // Added
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
