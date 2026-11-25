"use client";

import { useEffect, useRef, useState } from "react";
import { initMap } from "@/utils/main";
import { handleMenuAction } from "@/utils/menu";
import { TripParams } from "@/utils/types";
import { Trip } from "@/utils/trip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
	faBars, 
	faTimes, 
	faChevronUp, 
	faChevronDown, 
	faChevronLeft, 
	faChevronRight 
} from "@fortawesome/free-solid-svg-icons";

export default function MapPage() {
	const mapRef = useRef<HTMLDivElement>(null);
	const sidebarRef = useRef<HTMLElement>(null);
	
	const [targetTrip, setTargetTrip] = useState<TripParams | null>(null);
	const [currentAction, setCurrentAction] = useState<string>("goHome");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

	useEffect(() => {
		if (mapRef.current) {
			initMap(mapRef.current);
		}
	}, []);

	const onMenuClick = async (action: string) => {
		setCurrentAction(action);
		setIsMobileMenuOpen(false);
		setOpenDropdown(null);
		setOpenSubDropdown(null);
		setIsSidebarOpen(true); // Automatically expand aside when a new menu item is chosen
		await handleMenuAction(action, setTargetTrip, sidebarRef.current); 
	};

	const toggleDropdown = (name: string) => {
		setOpenDropdown((prev) => {
			const next = prev === name ? null : name;
			if (next !== "family") {
				setOpenSubDropdown(null);
			}
			return next;
		});
	};

	const toggleSubDropdown = (name: string) => {
		setOpenSubDropdown((prev) => (prev === name ? null : name));
	};

	return (
		<div className="page-container">
			<header className="header">
				<nav className="navbar">
					<div className="navbar-header">
						<button onClick={() => onMenuClick("goHome")} className="nav-btn brand-btn">
							Paul Babin&apos;s and family - Travels, photos and memories
						</button>
						<button
							className="hamburger-btn"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle navigation menu"
						>
							<FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
						</button>
					</div>

					<ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
						<li>
							<button onClick={() => onMenuClick("ShowHomes")} className="nav-btn">
								Places I have lived
							</button>
						</li>
						<li>
							<button onClick={() => onMenuClick("CtoUKandBack")} className="nav-btn">
								Voyage to UK and back
							</button>
						</li>
						<li className={`dropdown ${openDropdown === "trips" ? "active" : ""}`}>
							<button 
								className="dropdown-btn" 
								onClick={() => toggleDropdown("trips")}
							>
								Trips
							</button>
							<div className="dropdown-content">
								<button onClick={() => onMenuClick("Newfoundland")} className="dropdown-item">1987 Trip around Newfoundland with Mum and Nigel</button>
								<button onClick={() => onMenuClick("Ontario")} className="dropdown-item">1989 Trip around Ontario with Mum</button>
								<button onClick={() => onMenuClick("StoOn1")} className="dropdown-item">1990 Trip to Ontario</button>
								<button onClick={() => onMenuClick("StoOn2")} className="dropdown-item">2000 Trip to Ontario</button>
								<button onClick={() => onMenuClick("CapeBreton")} className="dropdown-item">2001 Trip to Cape Breton with Denise</button>
								<button onClick={() => onMenuClick("England")} className="dropdown-item">2002 Trip to England with Denise</button>
								<button onClick={() => onMenuClick("StoNF")} className="dropdown-item">2008 Trip to Niagara Falls with Denise</button>
							</div>
						</li>
						<li>
							<button onClick={() => onMenuClick("Places")} className="nav-btn">
								Places I have been
							</button>
						</li>
						<li className={`dropdown family-dropdown ${openDropdown === "family" ? "active" : ""}`}>
							<button 
								className="dropdown-btn" 
								onClick={() => toggleDropdown("family")}
							>
								Family memories
							</button>
							<div className="dropdown-content">
								<div className={`sub-dropdown ${openSubDropdown === "denise" ? "active" : ""}`}>
									<button 
										type="button"
										className="dropdown-item sub-dropdown-btn"
										onClick={() => toggleSubDropdown("denise")}
									>
										<span>Denise</span>
										<FontAwesomeIcon icon={openSubDropdown === "denise" ? faChevronDown : faChevronLeft} />
									</button>
									<div className="sub-dropdown-content">
										<button onClick={() => onMenuClick("denisebefore")} className="dropdown-item">Photos with Denise before I met her in 2001</button>
										<button onClick={() => onMenuClick("deniseafter")} className="dropdown-item">Photos with Denise After I met her in 2001</button>
										<button onClick={() => onMenuClick("2001wedding")} className="dropdown-item">2001 civil wedding photos in Saint John</button>
										<button onClick={() => onMenuClick("2002wedding")} className="dropdown-item">2002 church wedding photos in Moncton</button>
									</div>
								</div>
								<button onClick={() => onMenuClick("margaret")} className="dropdown-item">
									Margaret
								</button>
								<div className={`sub-dropdown ${openSubDropdown === "edmond" ? "active" : ""}`}>
									<button 
										type="button"
										className="dropdown-item sub-dropdown-btn"
										onClick={() => toggleSubDropdown("edmond")}
									>
										<span>Edmond</span>
										<FontAwesomeIcon icon={openSubDropdown === "edmond" ? faChevronDown : faChevronLeft} />
									</button>
									<div className="sub-dropdown-content">
										<button onClick={() => onMenuClick("edmondpre")} className="dropdown-item">Photos with Edmond pre 1942</button>
										<button onClick={() => onMenuClick("service")} className="dropdown-item">Edmond's army service records 1942 to 1945</button>
										<button onClick={() => onMenuClick("unit")} className="dropdown-item">Edmond's army unit War Diary 1944 to 1945</button>
										<button onClick={() => onMenuClick("unitmap")} className="dropdown-item">Edmond's army unit map of movements 1944 to 1945</button>
										<button onClick={() => onMenuClick("edmondpost")} className="dropdown-item">Photos with Edmond post 1945</button>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</nav>
			</header>

			<div className="main-layout">
				<aside 
					ref={sidebarRef} 
					id="sidebar" 
					key={currentAction} 
					className={`aside ${isSidebarOpen ? "expanded" : "collapsed"}`}
				>
					{/* Collapsible Header Bar */}
					<div className="aside-toggle-bar">
						<span className="aside-toggle-title">
							{isSidebarOpen ? "Details" : "Tap to view details"}
						</span>
						<button
							type="button"
							className="aside-toggle-btn"
							onClick={() => setIsSidebarOpen(!isSidebarOpen)}
							aria-label={isSidebarOpen ? "Collapse details panel" : "Expand details panel"}
						>
							<span className="desktop-icon">
								<FontAwesomeIcon icon={isSidebarOpen ? faChevronLeft : faChevronRight} />
							</span>
							<span className="mobile-icon">
								<FontAwesomeIcon icon={isSidebarOpen ? faChevronDown : faChevronUp} />
							</span>
						</button>
					</div>

					{/* Scrollable Content */}
					<div className="aside-content">
						{targetTrip ? (
							<Trip params={targetTrip} />
						) : (
							<h4>Select from the menu to see my homes and travels mapped using Google Maps</h4>
						)}
					</div>
				</aside>
				<main ref={mapRef} id="map" className="map-container" />
			</div>
		</div>
	);
}
