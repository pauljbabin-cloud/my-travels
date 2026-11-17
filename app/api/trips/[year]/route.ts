import { NextResponse } from "next/server";
import { db } from "@/src/prisma/db"; // Keep your working import path

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ year: string }> }
) {
  try {
    const { year } = await params;

    const stops = await db.orm.public.Trips
      .where((t) => t.year.eq(year))
      .orderBy((t) => t.id.asc())
      .all();

    return NextResponse.json({ stops });
  } catch (error) {
    console.error("Failed to fetch trip details from Prisma:", error);
    return NextResponse.json(
      { error: "Failed to load trip details" },
      { status: 500 }
    );
  }
}
