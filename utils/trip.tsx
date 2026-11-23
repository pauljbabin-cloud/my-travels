import { useEffect, useState, useRef } from 'react';
import { TripParams } from "./types";
import { createTripState, resetMarkerClusterer, clearPolylines } from "./tripState";
import { panToHomeMarker } from "@/utils/showhomes";
import { runMasterSequence, toggleHighlight, SidebarItemData } from "@/utils/runMasterSequence";
import { PlacesMenu } from "@/utils//PlacesMenu";

function decodeHtml(html: string): string {
    if (typeof document === 'undefined') return html;
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function Trip({ params }: { params: TripParams }) {
    const [sidebarItems, setSidebarItems] = useState < SidebarItemData[] > ([]);
    const [homesItems, setHomesItems] = useState < any[] > ([]);
	const [placesItems, setPlacesItems] = useState<any[]>([]);

    const tripStateRef = useRef(createTripState());

    const handleItemClick = (item: SidebarItemData) => {
        if (!params.TripMap)
            return;
        params.TripMap.setZoom(18);
        params.TripMap.setCenter(item.position);

        const linkedMarker = tripStateRef.current.markerRegistry[item.id];
        if (linkedMarker) {
            toggleHighlight(linkedMarker);
        }
    };

	const handleHomeClick = (homeId: any) => {
        if (!params.TripMap)
            return;
        panToHomeMarker(homeId, params.TripMap, tripStateRef.current);
    };

    useEffect(() => {
        if (typeof window === 'undefined' || !params.TripMap)
            return;

        const abortController = new AbortController();
        const currentSnapshot = tripStateRef.current;

        const executeSequence = async() => {
            await runMasterSequence(
                params,
                currentSnapshot,
                setSidebarItems,
                setHomesItems,
				setPlacesItems,
                abortController.signal);
        };

        executeSequence();

        return () => {
            abortController.abort();
            clearPolylines(currentSnapshot);
            resetMarkerClusterer(currentSnapshot);
        };

    }, [params]);

    return (
         <> { params.TripHTML &&  < div dangerouslySetInnerHTML = { {__html: params.TripHTML } } />}
		 
			{params.tripId === "places" && (
				<PlacesMenu map={params.TripMap} />
			)}

            {homesItems.length > 0 && (
                <div id="IDShowHomes">
					<ol className="flexible-list">
						{homesItems.map((home) => (
						<li
							key={home.id}
							className="sidebar-item"
							style={{ cursor: 'pointer' }}
							onClick={() => handleHomeClick(home.id)}
						>
							{home.address}
						</li> ))
						}
					</ol>
				</div> )
			}

			{sidebarItems.length > 0 && (
				<div id = "IDShowTrips" >
					<ul className = "flexible-list" > 
						{ sidebarItems.map((item) => (
						<li
							key={item.id}
							className="sidebar-item"
							data-id={item.id}
							onClick = {() => handleItemClick(item)}
						> 
							{ decodeHtml(item.description) }
						</li> ))
						}
					</ul>
				</div> )
			}
			</> );
}
