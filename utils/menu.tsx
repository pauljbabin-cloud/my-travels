import { gMap } from "./main";
import { ShowHomes } from "./showhomes";
import { ShowShipVoyage } from "./showshipvoyage";
import { ShowHeathrowTorontoFlight } from "./showheathrowtorontoflight";
import { ArgentiaFerryRoute } from "./ferry";
import { ClearEverything } from "./cleareverything";
import { TripParams } from "./types";

export async function handleMenuAction(action: string, setTargetTrip: (params: TripParams | null) => void, sidebar: HTMLElement | null) {
    if (typeof window === "undefined" || !gMap)
        return;

    await ClearEverything(gMap);
    setTargetTrip(null);

    switch (action) {
    case "goHome":
        gMap.panTo({ lat: 46.2229104, lng: -64.5333937 });
        gMap.setOptions({ zoom: 18 });
        setTargetTrip({
            TripMap: gMap,
            tripId: "home",
            TripHTML: "<h4>Select from the menu to see my homes and travels mapped using Google Maps</h4>",
            TripRoute: "",
            TripRoute1: "",
            TripDetails: "0000Trip.csv"
        });
        break;

    case "ShowHomes":
        await ShowHomes(gMap, (loadedHomes) => {});
        setTargetTrip({
            TripMap: gMap,
            tripId: "homes",
            TripHTML: "<h4>Select from the addresses below and the map will jump to that location. Click on the icon to see some details.</h4>",
            TripRoute: "",
            TripRoute1: "",
            TripDetails: "homes"
        });
        break;

    case "CtoUKandBack":
        await ShowShipVoyage(gMap);
        await ShowHeathrowTorontoFlight(gMap);
        setTargetTrip({
            TripMap: gMap,
            tripId: "ctouk",
            TripHTML: `
          <img src="/images/red.jpg" alt="Voyage from Quebec City to London" style="display: block; margin: 0 auto;">
          <h4 class="my-2">Red line indcates the approximate course of the ship Arkadia that we (Mum, Michael and I) took from Quebec City docks to Tilbury Docks in London. We left on April 8th 1959 and arrived on April 16th 1959</h4>
          <img src="/images/blue.jpg" alt="Flight from Heathrow to Toronto" style="display: block; margin: 0 auto;">
          <h4 class="my-2">On April 4th 1978 I returned to Toronto by myself flying roughly the blue line from Heathrow</h4>
        `,
            TripRoute: "",
            TripRoute1: "",
            TripDetails: "0000Trip.csv"
        });
        break;

    case "Ontario":
        gMap.panTo({ lat: 43.62505385526114, lng: -80.6859858253849 });
        gMap.setOptions({ zoom: 7 });
        setTargetTrip({
            TripMap: gMap,
            tripId: "ontario-1989",
            TripHTML: "<h4>Approximate route for vacation with Mum - driving an RV around Ontario 16th to 30th September 1989 and stopping at the following places:</h4>",
            TripRoute: "/csvs/1989route0.csv",
            TripRoute1: "/csvs/1989route1.csv",
            TripDetails: "/csvs/1989Trip.csv"
        });
        break;

    case "StoNF":
        gMap.panTo({ lat: 44.59618326844843, lng: -72.68065594848818 });
        gMap.setOptions({ zoom: 6 });
        setTargetTrip({
            TripMap: gMap,
            tripId: "niagara-2008",
            TripHTML: "<h4>Approximate route for vacation with Denise - driving from Shediac to Niagara Falls starting June 9th 2008 and stopping at the following places:</h4>",
            TripRoute: "/csvs/2008route.csv",
            TripRoute1: "",
            TripDetails: "/csvs/2008Trip.csv"
        });
        break;

    case "England":
        gMap.panTo({ lat: 52.34725687163485, lng: -1.289361054285812 });
        gMap.setOptions({ zoom: 6 });
        setTargetTrip({
            TripMap: gMap,
            tripId: "england-2002",
            TripHTML: "<h4>Approximate route for July 2002 vacation with Denise to England - Starting from Heathrow airport we rented a car and stopped at the following places:</h4>",
            TripRoute: "/csvs/2002route.csv",
            TripRoute1: "",
            TripDetails: "/csvs/2002Trip.csv"
        });
        break;

    case "Newfoundland":
        gMap.panTo({ lat: 46.86486106816211, lng: -59.857204948346094 });
        gMap.setOptions({ zoom: 6 });
        setTargetTrip({
            TripMap: gMap,
            tripId: "newfoundland-1987",
            TripHTML: "<h4>Approximate route for 1987 vacation with Mum and Nigel in a motorhome.<br />Starting from Bedford NS we drove to North Sydney to take the ferry to Newfoundland and then back. Then we went to visit Saint-Louis-de-Kent and on to Saint John to take the ferry to Digby NS. We stopped at the following places:</h4>",
            TripRoute: "/csvs/1987croute.csv",
            TripRoute1: "",
            TripDetails: "/csvs/1987Trip.csv"
        });
        await ArgentiaFerryRoute(gMap);
        break;

    case "CapeBreton":
        gMap.panTo({ lat: 45.389787020830795, lng: -63.32632936408758 });
        gMap.setZoom(7);
        setTargetTrip({
            TripMap: gMap,
            tripId: "capebreton-2001",
            TripHTML: "<h4>Approximate route for 2001 vacation with Denise to Cape Breton.<br />Starting from Saint John on September 11th 2001 we stopped at a friend in Moncton and saw the second plane hit the Twin Towers.<br />Like everyone else we were horrified by what happened, but decided that even if war was to break out, we should still go on our vacation. Of course we listened to some news, but generally said that we needed to enjoy the trip and see what happens. We also stopped at the following places:</h4>",
            TripRoute: '/csvs/2001route.csv',
            TripRoute1: "",
            TripDetails: '/csvs/2001Trip.csv'
        });
        break;

    case "Places":
        gMap.panTo({ lat: 45.389787020830795, lng: -63.32632936408758 });
        gMap.setOptions({ zoom: 7 });
        break;

    default:
        break;
    }
}
