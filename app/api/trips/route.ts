import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

// GET all trips including their nested waypoints and details
export async function GET() {
  try {
    const trips = await prisma.trip.findMany({
      include: {
        waypoints: {
          orderBy: {
            order: "asc", // Ensures path points load sequentially as defined in your schema
          },
        },
        details: {
          orderBy: {
            order: "asc", // Maintains sidebar ordering sequence
          },
        },
      },
    });

    return NextResponse.json(trips, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch trips:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST a new trip with optional nested waypoints and details (Relation Queries)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const {
      actionKey,
      panLat,
      panLng,
      zoom,
      htmlDescription,
      waypoints,
      details,
    } = body;

    // Validate required fields
    if (!actionKey || panLat === undefined || panLng === undefined || zoom === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the trip along with its associated records atomically
    const newTrip = await prisma.trip.create({
      data: {
        actionKey,
        panLat,
        panLng,
        zoom,
        htmlDescription,
        // Prisma handles creating related items automatically using 'createMany' nested syntax
        waypoints: waypoints ? {
          createMany: {
            data: waypoints, 
          },
        } : undefined,
        details: details ? {
          createMany: {
            data: details,
          },
        } : undefined,
      },
      include: {
        waypoints: true,
        details: true,
      },
    });

    return NextResponse.json(newTrip, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create trip:", error);
    
    // Check for Prisma unique constraint violation (P2002) for actionKey
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: `The actionKey '${error.meta?.target}' must be unique.` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
