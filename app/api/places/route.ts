import { NextResponse } from "next/server";
import { db } from "@/src/prisma/db";

// GET all places
export async function GET() {
    try {
        const places = await db.orm.public.Places.all();
        return NextResponse.json(places, {
            status: 200
        });
    } catch (error) {
        console.error("Failed to fetch places:", error);
        return NextResponse.json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}

// POST a new place
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { address, title, image, type } = body;

        if (!address || !title || !image || !type) {
            return NextResponse.json({
                error: "Missing required fields"
            }, {
                status: 400
            });
        }

        const newPlace = await db.orm.public.Places.create({
            address,
            title,
            image,
            type,
        });

        return NextResponse.json(newPlace, {
            status: 201
        });
    } catch (error) {
        console.error("Failed to create place:", error);
        return NextResponse.json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
