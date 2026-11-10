// app/api/trips/route.ts
import { NextResponse } from "next/server";
import { db } from "@/src/prisma/db"; 

export async function GET() {
  try {
    const trips = await db.trip.findMany({
      include: {
        waypoints: {
          orderBy: {
            order: "asc", 
          },
        },
        details: {
          orderBy: {
            order: "asc", 
          },
        },
      },
    });

    return NextResponse.json(trips, { status: 200 }); //
  } catch (error) {
    console.error("Failed to fetch trips:", error); //
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 } //
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json(); //
    
    const {
      actionKey,
      panLat,
      panLng,
      zoom,
      htmlDescription,
      waypoints,
      details,
    } = body; //

    if (!actionKey || panLat === undefined || panLng === undefined || zoom === undefined) { //
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 } //
      );
    }

    const newTrip = await db.trip.create({
      data: {
        actionKey,
        panLat,
        panLng,
        zoom,
        htmlDescription,
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

    return NextResponse.json(newTrip, { status: 201 }); //
  } catch (error: any) {
    console.error("Failed to create trip:", error); //
    
    if (error.code === "P2002") { 
      return NextResponse.json(
        { error: `The actionKey '${error.meta?.target}' must be unique.` },
        { status: 400 } //
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 } //
    );
  }
}
