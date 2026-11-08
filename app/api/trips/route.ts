import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Replace this with your actual database fetching logic
    const data = await prisma.trip.findMany(); 
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
