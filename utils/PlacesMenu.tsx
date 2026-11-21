"use client";

import { useState } from "react";

interface PlacesMenuProps {
    map: google.maps.Map | null;
}

export function PlacesMenu({
    map
}
    : PlacesMenuProps) {
    const [currentAction, setCurrentAction] = useState < string > ("goHome");
    const [isCanadaOpen, setIsCanadaOpen] = useState < boolean > (false);
    const [isEnglandOpen, setIsEnglandOpen] = useState < boolean > (false);
    const [isItalyOpen, setIsItalyOpen] = useState < boolean > (false);
    const [isUSAOpen, setIsUSAOpen] = useState < boolean > (false);

    const handleSideMenuAction = (action: string) => {
        if (typeof window === "undefined" || !map)
            return;

        switch (action) {
        case "goHome":
            map.panTo({
                lat: 45.177953753536876,
                lng: -52.42747407873573
            });
            map.setOptions({
                zoom: 3
            });
            break;

        case "NB":
            map.panTo({
                lat: 46.76314247859076,
                lng: -66.46284064635225
            });
            map.setOptions({
                zoom: 7
            });
            break;

        case "AB":
            map.panTo({
                lat: 51.1318917012331,
                lng: -114.011794055721
            });
            map.setOptions({
                zoom: 7
            });
            break;

        case "NS":
            map.panTo({
                lat: 45.293300907253276,
                lng: -63.148292424000054
            });
            map.setOptions({
                zoom: 7
            });
            break;

        case "NF":
            map.panTo({
                lat: 48.757954330514124,
                lng: -55.9826257097697
            });
            map.setOptions({
                zoom: 6.5
            });
            break;

        case "ON":
            map.panTo({
                lat: 43.81815954388594,
                lng: -78.39755287878151
            });
            map.setOptions({
                zoom: 7
            });
            break;

        case "PE":
            map.panTo({
                lat: 46.36391069720164,
                lng: -63.39062975780285
            });
            map.setOptions({
                zoom: 8.5
            });
            break;

        case "QC":
            map.panTo({
                lat: 47.348015044531735,
                lng: -70.47561732629161
            });
            map.setOptions({
                zoom: 6.5
            });
            break;

        case "France":
            panToPlace(map, "Bourges");
            map.setOptions({
                zoom: 5.8
            });
            break;

        case "Ireland":
            panToPlace(map, "Ireland");
            map.setOptions({
                zoom: 7
            });
            break;

        case "Italy":
            panToPlace(map, "Italy");
            map.setOptions({
                zoom: 6
            });
            break;

        case "Greece":
            panToPlace(map, "Greece");
            map.setOptions({
                zoom: 7
            });
            break;

        case "Holland":
            panToPlace(map, "Oosterhout");
            map.setOptions({
                zoom: 8
            });
            break;

        case "Spain":
            panToPlace(map, "Spain");
            map.setOptions({
                zoom: 6
            });
            break;

        case "Switzerland":
            panToPlace(map, "Switzerland");
            map.setOptions({
                zoom: 7.8
            });
            break;

        case "Campania":
            panToPlace(map, "Mount Vesuvius");
            map.setOptions({
                zoom: 9.8
            });
            break;

        case "Colorado":
            panToPlace(map, "Colorado");
            map.setOptions({
                zoom: 6
            });
            break;

        case "New England":
            panToPlace(map, "New England");
            map.setOptions({
                zoom: 6
            });
            break;

        case "Norfolk":
            panToPlace(map, "Thetford");
            map.setOptions({
                zoom: 8.5
            });
            break;

        case "Kent":
            panToPlace(map, "Kent");
            map.setOptions({
                zoom: 9
            });
            break;

        case "Dorset":
            panToPlace(map, "Fyfett");
            map.setOptions({
                zoom: 8
            });
            break;

        case "Wales":
            panToPlace(map, "North Wales");
            map.setOptions({
                zoom: 9
            });
            break;

        case "Yorkshire":
            panToPlace(map, "Yorkshire");
            map.setOptions({
                zoom: 8
            });
            break;

        case "Cumberland":
            panToPlace(map, "Plumbland UK");
            map.setOptions({
                zoom: 9
            });
            break;

        case "London":
            panToPlace(map, "London UK");
            map.setOptions({
                zoom: 12
            });
            break;

        default:
            break;
        }
    };

    const onMenuClick = (action: string) => {
        setCurrentAction(action);
        handleSideMenuAction(action);
    };

    return (
		    <nav className="side-navbar">
      <ul className="side-nav-links">
        <li>
          <button onClick={() => onMenuClick("goHome")} className="side-nav-btn">
            Places I have been
          </button>
        </li>
        <li className="side-dropdown">
          <button 
            onClick={() => setIsCanadaOpen(!isCanadaOpen)} 
            className="side-dropdown-btn"
          >
            Canada {isCanadaOpen ? "▲" : "▼"}
          </button>
          <div 
            className="side-dropdown-content"
            style={{ display: isCanadaOpen ? "block" : undefined }}
          >
            <button onClick={() => onMenuClick("NB")} className="side-dropdown-item">New Brunswick</button>
            <button onClick={() => onMenuClick("AB")} className="side-dropdown-item">Alberta</button>
            <button onClick={() => onMenuClick("NS")} className="side-dropdown-item">Nova Scotia</button>
            <button onClick={() => onMenuClick("NF")} className="side-dropdown-item">Newfoundland</button>
            <button onClick={() => onMenuClick("ON")} className="side-dropdown-item">Ontario</button>
            <button onClick={() => onMenuClick("PE")} className="side-dropdown-item">Prince Edward Island</button>
            <button onClick={() => onMenuClick("QC")} className="side-dropdown-item">Quebec</button>
          </div>
        </li>
        <li className="side-dropdown">
          <button 
            onClick={() => setIsEnglandOpen(!isEnglandOpen)} 
            className="side-dropdown-btn"
          >
            United Kingdom {isEnglandOpen ? "▲" : "▼"}
          </button>
          <div 
            className="side-dropdown-content"
            style={{ display: isEnglandOpen ? "block" : undefined }}
          >
            <button onClick={() => onMenuClick("Norfolk")} className="side-dropdown-item">East Anglia</button>
			<button onClick={() => onMenuClick("London")} className="side-dropdown-item">London</button>
			<button onClick={() => onMenuClick("Kent")} className="side-dropdown-item">South East England</button>
            <button onClick={() => onMenuClick("Dorset")} className="side-dropdown-item">South West England</button>
            <button onClick={() => onMenuClick("Wales")} className="side-dropdown-item">North Wales and Cheshire</button>
            <button onClick={() => onMenuClick("Yorkshire")} className="side-dropdown-item">Midlands and Yorkshire</button>
			<button onClick={() => onMenuClick("Cumberland")} className="side-dropdown-item">Cumberland and Scotland</button>
          </div>
        </li>
        <li><button onClick={() => onMenuClick("France")} className="side-nav-btn">France</button></li>
        <li><button onClick={() => onMenuClick("Ireland")} className="side-nav-btn">Ireland</button></li>
        <li></li>
        <li className="side-dropdown">
          <button 
            onClick={() => setIsItalyOpen(!isItalyOpen)} 
            className="side-dropdown-btn"
          >
            Italy {isItalyOpen ? "▲" : "▼"}
          </button>
          <div 
            className="side-dropdown-content"
            style={{ display: isItalyOpen ? "block" : undefined }}
          >
            <button onClick={() => onMenuClick("Italy")} className="side-dropdown-item">Italy</button>
            <button onClick={() => onMenuClick("Campania")} className="side-dropdown-item">Campania region of Italy</button>
          </div>
        </li>
        <li><button onClick={() => onMenuClick("Greece")} className="side-nav-btn">Greece</button></li>
        <li><button onClick={() => onMenuClick("Holland")} className="side-nav-btn">Netherlands and Belguim</button></li>
        <li><button onClick={() => onMenuClick("Spain")} className="side-nav-btn">Spain</button></li>
        <li><button onClick={() => onMenuClick("Switzerland")} className="side-nav-btn">Switzerland</button></li>
        <li className="side-dropdown">
          <button 
            onClick={() => setIsUSAOpen(!isUSAOpen)} 
            className="side-dropdown-btn"
          >
            United States of America {isUSAOpen ? "▲" : "▼"}
          </button>
          <div 
            className="side-dropdown-content"
            style={{ display: isUSAOpen ? "block" : undefined }}
          >
            <button onClick={() => onMenuClick("New England")} className="side-dropdown-item">New England</button>
            <button onClick={() => onMenuClick("Colorado")} className="side-dropdown-item">Colorado</button>
          </div>
        </li>

      </ul>
    </nav>
);
}

function panToPlace(map: google.maps.Map, placeName: string) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        address: placeName
    }, (results, status) => {
        if (status === "OK" && results && results[0]) {
            // Extract the geometry location (LatLng object)
            const location = results[0].geometry.location;

            // Pan the map to the resolved coordinates
            map.panTo(location);
        } else {
            console.error("Geocode failed due to: " + status);
        }
    });
}
