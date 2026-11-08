import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPostgresAdapter } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPostgresAdapter({
    connectionString: process.env.DATABASE_URL!,
  }),
});

const users = await prisma.user.findMany();