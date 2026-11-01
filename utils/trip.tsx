"use client";

import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { faGasPump, faCamera, faBed, faCampground } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { importLibrary } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { TripParams } from "./types";
import { markers, markerRegistry,  setMarkerCluster, resetMarkerClusterer } from "./tripState";

let activeMarker: google.maps.marker.AdvancedMarkerElement | null = null;
let mapPolylines: google.maps.Polyline[] = [];

interface TripDetails {
    title: string;
    description: string;
    image: string;
    type: string;
    index: number;
}

interface SidebarItemData {
    id: string;
    title: string;
    description: string;
    image: string;
    type: string;
    position: google.maps.LatLngLiteral;
}

interface GoogleLibs {
    AdvancedMarkerElement: any;
    PolylineClass: any;
    decodePath: any;
}

export function Trip({ params }: { params: TripParams}) {
	
    const [sidebarItems, setSidebarItems] = useState < SidebarItemData[] > ([]);
    const isInitialized = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !params.TripMap)
            return;

        let active = true;

        let libs: GoogleLibs = {
            AdvancedMarkerElement: null,
            PolylineClass: null,
            decodePath: null,
        };

	async function initGoogleLibraries(): Promise<GoogleLibs | null> {
		if (typeof window === "undefined") return null; 

		const [
			{ AdvancedMarkerElement }, 
			{ Polyline }, 
			{ encoding }
		] = await Promise.all([
			importLibrary("marker") as Promise<google.maps.MarkerLibrary>,
			importLibrary("maps") as Promise<google.maps.MapsLibrary>,
			importLibrary("geometry") as Promise<google.maps.GeometryLibrary>,
		]);

		return {
			AdvancedMarkerElement,
			PolylineClass: Polyline,
			decodePath: encoding.decodePath
		};
	}


        async function loadRouteFromCSV(filePath: string) {
            try {
                const response = await fetch(filePath);
                if (!response.ok)
                    return null;
                const csvText = await response.text();
                const rows = csvText.split('\n').slice(1);

                let origin = null;
                let destination = null;
                const intermediates: any[] = [];

                rows.forEach(row => {
                    if (!row.trim())
                        return;
                    const [type, latStr, lngStr] = row.split(',');
                    const lat = parseFloat(latStr);
                    const lng = parseFloat(lngStr);
                    if (isNaN(lat) || isNaN(lng))
                        return;

                    const waypoint = {
                        location: {
                            lat,
                            lng
                        },
                        via: true
                    };

                    if (type === 'origin') {
                        origin = {
                            location: {
                                lat,
                                lng
                            }
                        };
                    } else if (type === 'destination') {
                        destination = {
                            location: {
                                lat,
                                lng
                            }
                        };
                    } else if (type === 'intermediate') {
                        intermediates.push(waypoint);
                    }
                });

                return {
                    origin,
                    destination,
                    intermediates,
                    travelMode: 'DRIVING',
                    routingPreference: 'TRAFFIC_AWARE',
                    routeModifiers: {
                        avoidFerries: false,
                        avoidTolls: false
                    }
                };
            } catch (e) {
                console.error("Error fetching or processing Route CSV", e);
                return null;
            }
        }

async function computeAndDrawRoute(routeData: any, activeLibs: GoogleLibs) {
    const { Route } = await google.maps.importLibrary('routes');

    try {
        const RouteRequest = {
            origin: {
                latLng: {
                    lat: routeData.origin.location.lat,
                    lng: routeData.origin.location.lng
                }
            },
            destination: {
                latLng: {
                    lat: routeData.destination.location.lat,
                    lng: routeData.destination.location.lng
                }
            },
            intermediates: routeData.intermediates.map((waypoint: any) => ({
                latLng: {
                    lat: waypoint.location.lat,
                    lng: waypoint.location.lng
                }
            })),
            travelMode: routeData.travelMode,
            routingPreference: routeData.routingPreference,
            routeModifiers: routeData.routeModifiers,
            fields: ['routes.legs.polyline', 'routes.polyline'],
        };

        const { routes } = await Route.computeRoutes(RouteRequest as any);
        
        if (routes && routes.length > 0) {
            const lines = routes[0].createPolylines();
            
            lines.forEach((polyline) => {
                polyline.setMap(params.TripMap);
                mapPolylines.push(polyline);
            });
        }
        
    } catch (error) {
        console.error('Error computing engine travel routes:', error);
    }
}

        async function parseSidebarCSVAndBuildMarkers(detailsPath: string, activeLibs: GoogleLibs): Promise < SidebarItemData[] > {
            const parsedItems: SidebarItemData[] = [];
            try {
                const response = await fetch(detailsPath);
                if (!response.ok)
                    return [];

                const csvText = await response.text();
                const rows = csvText.split('\n').slice(1);

                rows.forEach((row, i) => {
                    const trimmedRow = row.trim();
                    if (!trimmedRow)
                        return;

                    const cols = trimmedRow.split(',');
                    const lat = parseFloat(cols[0]);
                    const lng = parseFloat(cols[1]);

                    const details: TripDetails = {
                        title: cols[2] || '',
                        description: cols[3] || '',
                        image: cols[4] || '',
                        type: cols[5] || '',
                        index: i + 1,
                    };

                    if (!isNaN(lat) && !isNaN(lng)) {
                        const position = {
                            lat,
                            lng
                        };
                        const markerContentElement = buildMarkerUI(details);

                        const marker = new activeLibs.AdvancedMarkerElement({
                            position,
                            content: markerContentElement,
                            gmpClickable: true,
                        });

                        const id = (i + 1).toString();
                        markerRegistry[id] = marker;

                        markerContentElement.addEventListener("click", () => {
                            params.TripMap.setZoom(18);
                            params.TripMap.setCenter(position);
                            toggleHighlight(marker);
                        });

                        markers.push(marker);

                        parsedItems.push({
                            id,
                            title: details.title,
                            description: details.description,
                            image: details.image,
                            type: details.type,
                            position
                        });
                    }
                });

                if (!active)
                    return [];

                const clustererInstance = new MarkerClusterer({
                    map: params.TripMap!
                });
                clustererInstance.addMarkers(markers);
                setMarkerCluster(clustererInstance);

            } catch (error) {
                console.error('Error loading or parsing Trip metadata file:', error);
            }
            return parsedItems;
        }

        async function runMasterSequence(): Promise < void > {
            
            while (mapPolylines.length > 0) {
                const poly = mapPolylines.pop();
                if (poly)
                    poly.setMap(null);
            }
			
			resetMarkerClusterer();

            while (markers.length > 0) {
                const marker = markers.pop();
                if (marker)
                    marker.setMap(null);
            }
            Object.keys(markerRegistry).forEach((key) => {
                delete markerRegistry[key];
            });

            setMarkerCluster((prevClusterer: any) => {
			if (prevClusterer && typeof prevClusterer.clearMarkers === "function") {
				prevClusterer.clearMarkers(); 
				prevClusterer.setMap(null);
			}
			return null;
			});

            libs = await initGoogleLibraries();
            if (!active)
                return; 

            const fileData = await loadRouteFromCSV(params.TripRoute);
            if (!active)
                return; 

			if (fileData && fileData.origin && fileData.destination) {
				await computeAndDrawRoute(fileData, libs);
			} else {
				//console.error("Skipping route calculation: Route data is incomplete or invalid.", fileData);
				return;
			}
			if (!active) return;
			
            if (params.TripDetails !== '0000Trip.csv') {
                const structuralData = await parseSidebarCSVAndBuildMarkers(params.TripDetails, libs);
                if (active) {
                    setSidebarItems(structuralData);
                }
            } else {
                setSidebarItems([]); 
            }
        }

        runMasterSequence();

        return () => {
            active = false;
        };
    }, [params]);

    const handleItemClick = (item: SidebarItemData) => {
        if (!params.TripMap)
            return;
        params.TripMap.setZoom(18);
        params.TripMap.setCenter(item.position);

        const linkedMarker = markerRegistry[item.id];
        if (linkedMarker) {
            toggleHighlight(linkedMarker);
        }
    };

    return (
        <div className = "trip-container" > {params.TripHTML && (< div dangerouslySetInnerHTML = { { __html: params.TripHTML } } /> )}
		{sidebarItems.length > 0 && (
			<div id="IDShowTrips">
				<ul className="flexible-list">
				{sidebarItems.map((item) => (
					<li key={item.id} className="sidebar-item" data-id={item.id} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }} >
						{item.description}
					</li>
				))}
				</ul>
			</div>
		)}
		</div> );
}

function buildMarkerUI(details: TripDetails): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "property";

    const cleanVariable = details.type.trim();

    const iconMap: Record < string, typeof faBed >  = {
        faGasPump,
        faCamera,
        faBed,
        faCampground,
    };

    const selectedIcon = iconMap[cleanVariable] || faBed;
    const iconHtml = faIcon(selectedIcon).html[0];

    if (details.image === 'blank') {
        container.innerHTML = `
      <div class="icon">
        ${iconHtml}
      </div>
      <div class="details">
        <div class="description">${details.title}</div>
      </div>
    `;
    } else {
        container.innerHTML = `
      <div class="icon">
        <i>${iconHtml}</i>
      </div>
      <div class="details">
        <a href="/slideshow?showId=${details.image}" target="_blank">
          <img id="myImage" src="images/s-${details.image}.jpg" data-image=${details.image} class="center-block">
        </a>
        <div class="description">${details.title}</div>
      </div>
    `;
    }
    return container;
}

function toggleHighlight(clickedMarker: google.maps.marker.AdvancedMarkerElement) {
  const content = clickedMarker.content as HTMLElement;
  if (!content) return;

  if (content.classList.contains("highlight")) {
    content.classList.remove("highlight");
    clickedMarker.zIndex = null;
    activeMarker = null;
  } else {
    if (activeMarker && activeMarker !== clickedMarker) {
      (activeMarker.content as HTMLElement).classList.remove("highlight");
      activeMarker.zIndex = null;
    }
    content.classList.add("highlight");
    clickedMarker.zIndex = 1;
    activeMarker = clickedMarker;
  }
}

