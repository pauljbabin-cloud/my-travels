import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all homes
export async function GET() {
  try {
    const homes = await prisma.home.findMany();
    return NextResponse.json(homes, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch homes:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST a new home
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { lat, lng, address, from, to, description, type } = body;

    // Validate required fields explicitly
    if (
      lat === undefined || 
      lng === undefined || 
      !address || 
      !from || 
      !to || 
      !description || 
      !type
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newHome = await prisma.home.create({
      data: {
        lat,
        lng,
        address,
        from,
        to,
        description,
        type,
      },
    });

    return NextResponse.json(newHome, { status: 201 });
  } catch (error) {
    console.error("Failed to create home:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
