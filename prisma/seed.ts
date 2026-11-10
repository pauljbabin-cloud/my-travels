import { PrismaClient } from "@prisma/client"; 


  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })


import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';


function parseCSV < T > (filePath: string): Promise < T[] > {
    return new Promise((resolve, reject) => {
        const results: T[] = [];
        if (!fs.existsSync(filePath)) {
            console.warn(`⚠️ Warning: File not found at ${filePath}`);
            return resolve([]);
        }
        fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (err) => reject(err));
    });
}

async function main() {
    console.log('🌱 Starting database migration seed sequence...');

    await prisma.home.deleteMany({});
    await prisma.waypoint.deleteMany({});
    await prisma.tripDetail.deleteMany({});
    await prisma.trip.deleteMany({});

    const homesCsvPath = path.join(process.cwd(), 'public/csvs/homes.csv');
    const rawHomes = await parseCSV < any > (homesCsvPath);

    console.log(`🏠 Parsing ${rawHomes.length} records from homes.csv...`);
    for (const row of rawHomes) {
        const lat = parseFloat(row.lat);
        const lng = parseFloat(row.lng);
        if (isNaN(lat) || isNaN(lng))
            continue;

        await prisma.home.create({
            data: {
                lat,
                lng,
                address: row.title || 'Unknown Address', // Falls back safely
                from: row.from || '',
                to: row.to || '',
                description: row.desc || '',
                type: row.type?.trim() || 'faHouseUser',
            },
        });
    }
    const tripDefinitions = [{
            actionKey: 'Ontario',
            panLat: 43.62505385526114,
            panLng: -80.6859858253849,
            zoom: 7,
            htmlDescription: '<h4>Approximate route for vacation with Mum - driving an RV around Ontario 16th to 30th September 1989 and stopping at the following places:</h4>',
            routes: ['1989route0.csv', '1989route1.csv'],
            details: '1989Trip.csv'
        }, {
            actionKey: 'StoNF',
            panLat: 44.59618326844843,
            panLng: -72.68065594848818,
            zoom: 6,
            htmlDescription: '<h4>Approximate route for vacation with Denise - driving from Shediac to Niagara Falls starting June 9th 2008 and stopping at the following places:</h4>',
            routes: ['2008route.csv'],
            details: '2008Trip.csv'
        }, {
            actionKey: 'England',
            panLat: 52.34725687163485,
            panLng: -1.289361054285812,
            zoom: 6,
            htmlDescription: '<h4>Approximate route for July 2002 vacation with Denise to England - Starting from Heathrow airport we rented a car and stopped at the following places:</h4>',
            routes: ['2002route.csv'],
            details: '2002Trip.csv'
        }, {
            actionKey: 'Newfoundland',
            panLat: 46.86486106816211,
            panLng: -59.857204948346094,
            zoom: 6,
            htmlDescription: '<h4>Approximate route for 1987 vacation with Mum and Nigel in a motorhome.<br />Starting from Bedford NS we drove to North Sydney to take the ferry to Newfoundland and then back...</h4>',
            routes: ['1987croute.csv'],
            details: '1987Trip.csv'
        }, {
            actionKey: 'CapeBreton',
            panLat: 45.389787020830795,
            panLng: -63.32632936408758,
            zoom: 7,
            htmlDescription: '<h4>Approximate route for 2001 vacation with Denise to Cape Breton...</h4>',
            routes: ['2001route.csv'],
            details: '2001Trip.csv'
        }
    ];

    for (const definition of tripDefinitions) {
        console.log(`🗺️  Migrating Trip: ${definition.actionKey}...`);

        const createdTrip = await prisma.trip.create({
            data: {
                actionKey: definition.actionKey,
                panLat: definition.panLat,
                panLng: definition.panLng,
                zoom: definition.zoom,
                htmlDescription: definition.htmlDescription,
            },
        });

        for (let i = 0; i < definition.routes.length; i++) {
            const routeFileName = definition.routes[i];
            const routePath = path.join(process.cwd(), `public/csvs/${routeFileName}`);

            const rawWaypoints = await parseCSV < any > (routePath);

            for (let orderIndex = 0; orderIndex < rawWaypoints.length; orderIndex++) {
                const row = rawWaypoints[orderIndex];
                const lat = parseFloat(row.lat);
                const lng = parseFloat(row.lng);
                if (isNaN(lat) || isNaN(lng))
                    continue;

                await prisma.waypoint.create({
                    data: {
                        tripId: createdTrip.id,
                        type: row.type?.trim().toLowerCase() || 'intermediate',
                        lat,
                        lng,
                        name: row.name || null,
                        routeNum: i,
                        order: orderIndex,
                    },
                });
            }
        }

        const detailsPath = path.join(process.cwd(), `public/csvs/${definition.details}`);
        const rawDetails = await parseCSV < any > (detailsPath);

        for (let orderIndex = 0; orderIndex < rawDetails.length; orderIndex++) {
            const row = rawDetails[orderIndex];
            const lat = parseFloat(row.lat);
            const lng = parseFloat(row.lng);
            if (isNaN(lat) || isNaN(lng))
                continue;

            await prisma.tripDetail.create({
                data: {
                    tripId: createdTrip.id,
                    lat,
                    lng,
                    title: row.title || '',
                    description: row.description || '',
                    image: row.image || 'blank',
                    type: row.type?.trim() || 'faCamera',
                    order: orderIndex,
                },
            });
        }
    }

    console.log('✅ Seed sequencing completed successfully!');
}

main()
.catch((e) => {
    console.error('❌ Migration script failed:', e);
    process.exit(1);
})
.finally(async() => {
    await prisma.$disconnect();
});
