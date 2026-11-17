import { NextResponse } from "next/server";
import { db } from "@/src/prisma/db"; // Keep your working import path

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ year: string }> }
) {
  try {
    const { year } = await params;

    const rows = await db.orm.public.Routes
      .where((r) => r.year.ilike(`${year}%`)) // Matches "1989-1", "1989-2", etc.
      .orderBy((r) => r.id.asc())
      .all();

    if (!rows.length) {
      return NextResponse.json({ routes: [] });
    }

    const grouped: Record<string, typeof rows> = {};
    for (const row of rows) {
      if (!grouped[row.year]) grouped[row.year] = [];
      grouped[row.year].push(row);
    }

    const formattedRoutes = Object.keys(grouped)
      .sort()
      .map((routeKey) => {
        const segment = grouped[routeKey];
        const originRow = segment.find((r) => r.type.trim() === "origin");
        const destRow = segment.find((r) => r.type.trim() === "destination");
        const intermediateRows = segment.filter(
          (r) => r.type.trim() === "intermediate"
        );

        if (!originRow || !destRow) return null;

        return {
          routeKey,
          origin: {
            location: { lat: originRow.lat, lng: originRow.lng },
          },
          destination: {
            location: { lat: destRow.lat, lng: destRow.lng },
          },
          intermediates: intermediateRows.map((wp) => ({
            location: { lat: wp.lat, lng: wp.lng },
          })),
          travelMode: "DRIVING",
          routingPreference: "TRAFFIC_AWARE",
          routeModifiers: {
            avoidFerries: false,
            avoidTolls: false,
          },
        };
      })
      .filter(Boolean);

    return NextResponse.json({ routes: formattedRoutes });
  } catch (error) {
    console.error("Failed to fetch routes from Prisma:", error);
    return NextResponse.json(
      { error: "Failed to load routes" },
      { status: 500 }
    );
  }
}
