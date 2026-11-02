export interface TripParams {
  TripMap: google.maps.Map | null;
  TripHTML: string;
  TripRoute: string;
  TripRoute1: string;
  TripDetails: string;
}

export interface HomeDetails {
  address: string;
  from: string;
  to: string;
  description: string;
  type: string;
  index: number;
}
