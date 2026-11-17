"use client";

import { useEffect, useRef, useState } from "react";
import { initMap, gMap } from "@/utils/main";
import { handleMenuAction } from "@/utils/menu";
import { TripParams } from "@/utils/types";
import { Trip } from "@/utils/trip";

export default function MapPage() {
	const mapRef = useRef<HTMLDivElement>(null);
	const sidebarRef = useRef<HTMLElement>(null);
	
	const [targetTrip, setTargetTrip] = useState<TripParams | null>(null);
	const [currentAction, setCurrentAction] = useState<string>("goHome");

	useEffect(() => {
		if (mapRef.current) {
			initMap(mapRef.current);
		}
	}, []);

	const onMenuClick = async (action: string) => {
		setCurrentAction(action);
		await handleMenuAction(action, setTargetTrip, sidebarRef.current); 
	};

	return (
		<div className="page-container">
			<header className="header">
				<nav className="navbar">
					<ul className="nav-links">
						<li>
							<button onClick={()=> onMenuClick("goHome")} className="nav-btn">Paul Babin&apos;s Travels etc</button>
						</li>
						<li>
							<button onClick={()=> onMenuClick("ShowHomes")} className="nav-btn">Places I have lived</button>
						</li>
						<li>
							<button onClick={()=> onMenuClick("CtoUKandBack")} className="nav-btn">Voyage to UK and back</button>
						</li>
						<li className="dropdown">
							<button className="dropdown-btn">Trips</button>
							<div className="dropdown-content">
								<button onClick={()=> onMenuClick("Newfoundland")} className="dropdown-item">1987 Trip around Newfoundland with Mum and Nigel</button>
								<button onClick={()=> onMenuClick("Ontario")} className="dropdown-item">1989 Trip around Ontario with Mum</button>
								<button onClick={()=> onMenuClick("StoOn1")} className="dropdown-item">1990 Trip to Ontario</button>
								<button onClick={()=> onMenuClick("StoOn2")} className="dropdown-item">2000 Trip to Ontario</button>
								<button onClick={()=> onMenuClick("CapeBreton")} className="dropdown-item">2001 Trip to Cape Breton with Denise</button>
								<button onClick={()=> onMenuClick("England")} className="dropdown-item">2002 Trip to England with Denise</button>
								<button onClick={()=> onMenuClick("StoNF")} className="dropdown-item">2008 Trip to Niagara Falls with Denise</button>
							</div>
						</li>
						<li>
							<button onClick={()=> onMenuClick("Places")} className="nav-btn">Places I have been</button>
						</li>
						<li className="dropdown">
							<button className="dropdown-btn">Slideshow of photos with Denise</button>
							<div className="dropdown-content">
								<button onClick={()=> onMenuClick("Denise")} className="dropdown-item">Photos with Denise before I met her in 2001</button>
								<button onClick={()=> onMenuClick("Life")} className="dropdown-item">Photos with Denise After I met her in 2001</button>
								<button onClick={()=> onMenuClick("2001")} className="dropdown-item">2001 civil wedding photos in Saint John</button>
								<button onClick={()=> onMenuClick("2001")} className="dropdown-item">2002 church wedding photos in Moncton</button>
							</div>
						</li>
					</ul>
				</nav>
			</header>
			<div className="main-layout">
				<aside ref={sidebarRef} id="sidebar" key={currentAction} className="aside">
					{targetTrip ? (
						<Trip params={targetTrip}/>
					) : (
						<h4>Select from the menu to see my homes and travels mapped using Google Maps</h4>
					)}
				</aside>
				<main ref={mapRef} id="map" className="map-container" />
			</div>
		</div>
	);
}
