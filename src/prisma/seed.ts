import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import postgres from '@prisma/orm-postgres/runtime';
import { contractFromJson } from '@prisma/orm-postgres/static';
import { all } from '@prisma/orm-postgres/orm-client';
import type { Contract } from './contract.d';
import contractJson from './contract.json' with { type: 'json' };

const contract = contractFromJson<Contract>(contractJson);
const db = postgres({
  contract,
  url: process.env.DATABASE_URL!,
});

interface HomeCsvRow {
  lat: string;
  lng: string;
  address: string;
  from: string;
  to: string;
  description: string;
  type: string;
  image: string;
}

interface PlaceCsvRow {
  address: string;
  title: string;
  image: string;
  type: string;
}

interface TripCsvRow {
  year: string;
  lat: string;
  lng: string;
  title: string;
  description: string;
  image: string;
  type: string;
}

interface RouteCsvRow {
  year: string;
  type: string;
  lat: string;
  lng: string;
  name: string;
}

async function seedHomes() {
  const csvFilePath = path.join(process.cwd(), 'public', 'csvs', 'homes.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as HomeCsvRow[];

  console.log(`Found ${records.length} homes in CSV...`);

  // Clear existing rows so re-running the seed doesn't create duplicates
  const deletedCount = await db.orm.public.Home.where(() => all()).deleteAndCount();
  console.log(`Cleared ${deletedCount} existing homes.`);

  // Bulk insert all rows, parsing lat/lng strings into numbers
  const insertedCount = await db.orm.public.Home.createAndCount(
    records.map((row) => ({
      lat: parseFloat(row.lat),
      lng: parseFloat(row.lng),
      address: row.address,
      from: row.from,
      to: row.to,
      description: row.description,
      type: row.type,
      image: row.image,
    }))
  );

  console.log(`Successfully seeded ${insertedCount} homes!`);
}

async function seedPlaces() {
  const csvFilePath = path.join(process.cwd(), 'public', 'csvs', 'places.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as PlaceCsvRow[];

  console.log(`Found ${records.length} places in CSV...`);

  // Clear existing rows so re-running the seed doesn't create duplicates
  const deletedCount = await db.orm.public.Places.where(() => all()).deleteAndCount();
  console.log(`Cleared ${deletedCount} existing places.`);

  // Bulk insert all rows
  const insertedCount = await db.orm.public.Places.createAndCount(
    records.map((row) => ({
      address: row.address,
      title: row.title,
      image: row.image,
      type: row.type,
    }))
  );

  console.log(`Successfully seeded ${insertedCount} places!`);
}

async function seedTrips() {
  const csvFilePath = path.join(process.cwd(), 'public', 'csvs', 'trips.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as TripCsvRow[];

  console.log(`Found ${records.length} trips in CSV...`);

  // Clear existing rows so re-running the seed doesn't create duplicates
  const deletedCount = await db.orm.public.Trips.where(() => all()).deleteAndCount();
  console.log(`Cleared ${deletedCount} existing trips.`);

  // Bulk insert all rows
  const insertedCount = await db.orm.public.Trips.createAndCount(
    records.map((row) => ({
      year: row.year,
      lat: parseFloat(row.lat),
      lng: parseFloat(row.lng),
      title: row.title,
      description: row.description,
      image: row.image,
      type: row.type,
    }))
  );

  console.log(`Successfully seeded ${insertedCount} trips!`);
}

async function seedRoutes() {
  const csvFilePath = path.join(process.cwd(), 'public', 'csvs', 'routes.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as RouteCsvRow[];

  console.log(`Found ${records.length} routes in CSV...`);

  // Clear existing rows so re-running the seed doesn't create duplicates
  const deletedCount = await db.orm.public.Routes.where(() => all()).deleteAndCount();
  console.log(`Cleared ${deletedCount} existing routes.`);

  // Bulk insert all rows, parsing lat/lng strings into numbers
  const insertedCount = await db.orm.public.Routes.createAndCount(
    records.map((row) => ({
      year: row.year,
      type: row.type,
      lat: parseFloat(row.lat),
      lng: parseFloat(row.lng),
      name: row.name,
    }))
  );

  console.log(`Successfully seeded ${insertedCount} routes!`);
}

async function main() {
  await seedHomes();
  await seedPlaces();
  await seedTrips();
  await seedRoutes();
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await db.close();
  });
