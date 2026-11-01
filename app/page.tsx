"use client";

import { useEffect, useRef, useState } from "react";
import { initMap, gMap } from "@/utils/main";
import { handleMenuAction } from "@/utils/menu";
import { TripParams } from "@/utils/types";
import { Trip } from "@/utils/trip";

export default function MapPage() {
	const mapRef = useRef<HTMLDivElement>(null);
	
	const [targetTrip, setTargetTrip] = useState<TripParams | null>(null);
	const [currentAction, setCurrentAction] = useState<string>("goHome");

	useEffect(() => {
		if (mapRef.current) {
			initMap(mapRef.current);
		}
	}, []);

	const onMenuClick = async (action: string) => {
		setCurrentAction(action);
		await handleMenuAction(action, setTargetTrip);
	};

	return (
		<div className="wrapper">
			<header className="header">
				<nav className="navbar">
					<ul className="nav-links">						
						<li><button onClick={() => onMenuClick("goHome")} className="nav-btn">Paul&apos;s Travels</button></li>
						<li><button onClick={() => onMenuClick("ShowHomes")} className="nav-btn">Places I have lived</button></li>
						<li><button onClick={() => onMenuClick("CtoUKandBack")} className="nav-btn">Voyage to UK and back</button></li>
						<li className="dropdown">
							<button className="dropdown-btn">Trips</button>
							<div className="dropdown-content">
								<button onClick={() => onMenuClick("Newfoundland")} className="w-full text-left px-4 py-2 hover:bg-gray-100 dropdown-item">1987 Trip around Newfoundland</button>
								<button onClick={() => onMenuClick("Ontario")} className="w-full text-left px-4 py-2 hover:bg-gray-100 dropdown-item">1989 Trip around Ontario</button>
								<button onClick={() => onMenuClick("CapeBreton")} className="w-full text-left px-4 py-2 hover:bg-gray-100 dropdown-item">2001 Trip to Cape Breton</button>
								<button onClick={() => onMenuClick("England")} className="w-full text-left px-4 py-2 hover:bg-gray-100 dropdown-item">2002 Trip to England</button>
								<button onClick={() => onMenuClick("StoNF")} className="w-full text-left px-4 py-2 hover:bg-gray-100 dropdown-item">2008 Trip to Niagara Falls</button>
							</div>
						</li>
						<li><button onClick={() => onMenuClick("Places")} className="nav-btn">Places I have been</button></li>
					</ul>
				</nav>
			</header>
			<div className="flex overflow-hidden relative w-screen h-screen"> 			
				<aside 
					id="sidebar" 
					key={currentAction} 
					className="w-1/3 overflow-y-auto sidebar-item"
				> 					
					{targetTrip ? (
						<Trip params={targetTrip} />
					) : (
						<h4>Select from the menu to see my homes and travels mapped using Google Maps</h4>
					)}
				</aside> 
				<main ref={mapRef} id="map" className="w-2/3 h-full bg-gray-100" /> 
			</div>
		</div>
	);
}
