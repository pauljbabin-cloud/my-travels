import { gMap } from "./main";
import { ShowHomes } from "./showhomes";
import { ShowShipVoyage } from "./showshipvoyage";
import { ShowHeathrowTorontoFlight } from "./showheathrowtorontoflight";
import { ArgentiaFerryRoute } from "./ferry";
import { ClearEverything } from "./cleareverything";
import { TripParams } from "./types";
import { attachResetViewControl, removeResetViewControl } from "./runMasterSequence";

export async function handleMenuAction(action: string, setTargetTrip: (params: TripParams | null) => void, sidebar: HTMLElement | null) {
    if (typeof window === "undefined" || !gMap)
        return;

    await ClearEverything(gMap);
    removeResetViewControl(gMap); 
    setTargetTrip(null);

    switch (action) {
    case "goHome": {
        const center = { lat: 46.2229104, lng: -64.5333937 };
        const zoom = 18;
        gMap.panTo(center);
        gMap.setOptions({ zoom });
        attachResetViewControl(gMap, center, zoom);

        setTargetTrip({
            TripMap: gMap,
            tripId: "home",
            TripHTML: "<h4>Select from the menu to see my homes and travels mapped using Google Maps</h4>",
            TripRoute: "",
            TripDetails: "none",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "ShowHomes": {
        const center = { lat: 46.2229104, lng: -64.5333937 };
        const zoom = 18;
        attachResetViewControl(gMap, center, zoom);

        setTargetTrip({
            TripMap: gMap,
            tripId: "homes",
            TripHTML: "<h4>Select from the addresses below and the map will jump to that location. Click on the icon to see some details.</h4>",
            TripRoute: "",
            TripDetails: "homes",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "CtoUKandBack": {
        const center = { lat: 48.327806522220335, lng: -38.378272970276264 };
        const zoom = 4;
        await ShowShipVoyage(gMap);
        await ShowHeathrowTorontoFlight(gMap);
        attachResetViewControl(gMap, center, zoom);

        setTargetTrip({
            TripMap: gMap,
            tripId: "ctouk",
            TripHTML: `
				<img src="/images/red.jpg" alt="Voyage from Quebec City to London" style="display: block; margin: 0 auto;">
				<a href="/slideshow?showId=ctouk" target="_blank" class="slideshow-link" style="flex-shrink: 0;">
                    <img id="myImage-ctouk" src="/images/s-ctouk.jpg" width="60" height="60" data-image="ctouk" class="center-block">
				</a>
				<h4 class="my-2">Red line indcates the approximate course of the ship Arkadia that we (Mum, Michael and I) took from Quebec City docks to Tilbury Docks in London. We left on April 8th 1959 and arrived on April 16th 1959</h4>
				<img src="/images/blue.jpg" alt="Flight from Heathrow to Toronto" style="display: block; margin: 0 auto;">
				<h4 class="my-2">On April 4th 1978 I returned to Toronto by myself flying roughly the blue line from Heathrow</h4>
			`,
            TripRoute: "",
            TripDetails: "none",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "Ontario": {
        const center = { lat: 43.62505385526114, lng: -80.6859858253849 };
        const zoom = 7;
        gMap.panTo(center);
        gMap.setOptions({ zoom });
        setTargetTrip({
            TripMap: gMap,
            tripId: "ontario-1989",
            tripYear: "1989",
            TripHTML: "<h4>Approximate route for vacation with Mum - driving an RV around Ontario 16th to 30th September 1989.<br />Total distance 2,271 kms (note that all distances and gas stops come from a log book that I kept),<br />We stopped at the following places:</h4>",
            TripRoute: "/csvs/routes.csv",
            TripDetails: "/csvs/trips.csv",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "StoOn1": {
        const center = { lat: 44.59618326844843, lng: -72.68065594848818 };
        const zoom = 6;
        gMap.panTo(center);
        gMap.setOptions({ zoom });
        setTargetTrip({
            TripMap: gMap,
            tripId: "ontario-1990",
            tripYear: "1990",
            TripHTML: "<h4>Approximate route for vacation to Ontario visting cousins May 27th to June 8th 1990 with total distance of 3,763 km<br />Stopped at the following places for gas but also many other places for sightseeing:</h4>",
            TripRoute: "/csvs/routes.csv",
            TripDetails: "/csvs/trips.csv",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "StoOn2": {
        const center = { lat: 44.59618326844843, lng: -72.68065594848818 };
        const zoom = 6;
        gMap.panTo(center);
        gMap.setOptions({ zoom });
        setTargetTrip({
            TripMap: gMap,
            tripId: "ontario-2000",
            tripYear: "2000",
            TripHTML: "<h4>Approximate route for vacation to Ontario visting cousins June 20th to 29th 2000 with a total distance of 4,295 kms and stopping at the following places:</h4>",
            TripRoute: "/csvs/routes.csv",
            TripDetails: "/csvs/trips.csv",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "StoNF": {
        const center = { lat: 44.59618326844843, lng: -72.68065594848818 };
        const zoom = 6;
        gMap.panTo(center);
        gMap.setOptions({ zoom });
        setTargetTrip({
            TripMap: gMap,
            tripId: "niagara-2008",
            tripYear: "2008",
            TripHTML: "<h4>Approximate route for vacation with Denise - driving from Shediac to Niagara Falls starting June 9th 2008 and stopping at the following places:</h4>",
            TripRoute: "/csvs/routes.csv",
            TripDetails: "/csvs/trips.csv",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "England": {
        const center = { lat: 52.34725687163485, lng: -1.289361054285812 };
        const zoom = 6;
        gMap.panTo(center);
        gMap.setOptions({ zoom });
        setTargetTrip({
            TripMap: gMap,
            tripId: "england-2002",
            tripYear: "2002",
            TripHTML: "<h4>Approximate route for July 2002 vacation with Denise to England - Starting from Heathrow airport we rented a car and stopped at the following places:</h4>",
            TripRoute: "/csvs/routes.csv",
            TripDetails: "/csvs/trips.csv",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "Newfoundland": {
        const center = { lat: 46.86486106816211, lng: -59.857204948346094 };
        const zoom = 6;
        gMap.panTo(center);
        gMap.setOptions({ zoom });
        setTargetTrip({
            TripMap: gMap,
            tripId: "newfoundland-1987",
            tripYear: "1987",
            TripHTML: "<h4>Approximate route for 1987 vacation with Mum and Nigel in a motorhome.<br />Starting from Bedford NS we drove to North Sydney to take the ferry to Newfoundland and then back.<br />Then we went to visit Saint-Louis-de-Kent and on to Saint John to take the ferry to Digby NS.<br />Total distance 3,492 kms.<br />We stopped at the following places:</h4>",
            TripRoute: "/csvs/routes.csv",
            TripDetails: "/csvs/trips.csv",
            initialCenter: center,
            initialZoom: zoom
        });
        await ArgentiaFerryRoute(gMap);
        break;
    }

    case "CapeBreton": {
        const center = { lat: 45.389787020830795, lng: -63.32632936408758 };
        const zoom = 7;
        gMap.panTo(center);
        gMap.setZoom(zoom);
        setTargetTrip({
            TripMap: gMap,
            tripId: "capebreton-2001",
            tripYear: "2001",
            TripHTML: "<h4>Approximate route for 2001 vacation with Denise to Cape Breton.<br />Starting from Saint John on September 11th 2001 we stopped at a friend in Moncton and saw the second plane hit the Twin Towers.<br />Like everyone else we were horrified by what happened, but decided that even if war was to break out, we should still go on our vacation. Of course we listened to some news, but generally said that we needed to enjoy the trip and see what happens.<br />Total distance 1741 kms. We also stopped at the following places:</h4>",
            TripRoute: "/csvs/routes.csv",
            TripDetails: "/csvs/trips.csv",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }

    case "Places": {
        const center = { lat: 45.177953753536876, lng: -52.42747407873573 };
        const zoom = 3;
        attachResetViewControl(gMap, center, zoom);

        setTargetTrip({
            TripMap: gMap,
            tripId: "places",
            TripHTML: "<h4>Select from the areas below and the map will jump to that location. Click on any icon to see some details, if none just means I visited the place.</h4>",
            TripRoute: "",
            TripDetails: "places",
            initialCenter: center,
            initialZoom: zoom
        });
        break;
    }
	
	case "denisebefore":
    case "deniseafter":
    case "2001wedding":
    case "2002wedding": {
        window.open(`/slideshow?showId=${action}`, "_blank", "noopener,noreferrer");
        break;
    }

    default:
        break;
    }
}
