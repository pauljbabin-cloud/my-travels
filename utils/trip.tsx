"use client";

import { useEffect, useState, useRef } from 'react';
import { TripParams } from "./types";
import { createTripState, resetMarkerClusterer, clearPolylines } from "./tripState";
import { panToHomeMarker } from "@/utils/showhomes";
import { runMasterSequence, toggleHighlight, SidebarItemData } from "@/utils/runMasterSequence";

export function Trip({ params }: { params: TripParams }) {
  const [sidebarItems, setSidebarItems] = useState<SidebarItemData[]>([]);
  const [homesItems, setHomesItems] = useState<any[]>([]);
  
  const tripStateRef = useRef(createTripState());

  const handleItemClick = (item: SidebarItemData) => {
    if (!params.TripMap) return;
    params.TripMap.setZoom(18);
    params.TripMap.setCenter(item.position);

    const linkedMarker = tripStateRef.current.markerRegistry[item.id];
    if (linkedMarker) {
      toggleHighlight(linkedMarker);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !params.TripMap) return;

    const abortController = new AbortController();
    const currentSnapshot = tripStateRef.current;

    const executeSequence = async () => {
      await runMasterSequence(
        params, 
        currentSnapshot, 
        setSidebarItems, 
        setHomesItems, 
        abortController.signal
      );
    };

    executeSequence();

    return () => {
      abortController.abort();
      clearPolylines(currentSnapshot);
      resetMarkerClusterer(currentSnapshot);
    };
    
  }, [params.TripDetails, params.TripRoute, params.TripRoute1, params.TripMap]);

  return (
    <>
      {params.TripHTML && <div dangerouslySetInnerHTML={{ __html: params.TripHTML }} />}
      
      {homesItems.length > 0 && homesItems.map((home) => (
        <li key={home.id} className="sidebar-item" style={{ cursor: 'pointer' }} onClick={() => panToHomeMarker(home.id, params.TripMap!)}>
          {home.address}
        </li>
      ))}
      
      {sidebarItems.length > 0 && sidebarItems.map((item) => (
        <li key={item.id} className="sidebar-item" data-id={item.id} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
          {item.description}
        </li>
      ))}
    </>
  );
}
