"use client";

export async function loadRouteFromCSV(filePath: string) {
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
