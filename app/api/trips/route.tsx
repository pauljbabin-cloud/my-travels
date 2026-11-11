// app/api/trips/route.ts
import { NextResponse } from "next/server";
import { db } from "@/src/prisma/db";

export async function GET() {
    try {
        const trips = await db.orm.public.Trip
            .include("waypoints", (w) => w.orderBy((item) => item.order.asc()))
            .include("details", (d) => d.orderBy((item) => item.order.asc()))
            .all();

        return NextResponse.json(trips, {
            status: 200
        });
    } catch (error) {
        console.error("Failed to fetch trips:", error);
        return NextResponse.json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { actionKey, panLat, panLng, zoom, htmlDescription, waypoints, details,  } = body;

        if (!actionKey || panLat === undefined || panLng === undefined || zoom === undefined) {
            return NextResponse.json({
                error: "Missing required fields"
            }, {
                status: 400
            });
        }

        const newTrip = await db.orm.public.Trip
            .include("waypoints")
            .include("details")
            .create({
                actionKey,
                panLat,
                panLng,
                zoom,
                htmlDescription,
                ...(waypoints ? {
                    waypoints: (w) => w.create(waypoints)
                }
                     : {}),
                ...(details ? {
                    details: (d) => d.create(details)
                }
                     : {}),
            });

        return NextResponse.json(newTrip, {
            status: 201
        });
    } catch (error: unknown) {
        console.error("Failed to create trip:", error);

        if (
            error instanceof Error &&
            "sqlState" in error &&
            error.sqlState === "23505") {
            return NextResponse.json({
                error: "The actionKey must be unique."
            }, {
                status: 400
            });
        }

        return NextResponse.json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
