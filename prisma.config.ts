import "dotenv/config";
import { definePrismaConfig } from "prisma/config";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";
import { defineConfig as composer } from "@prisma/composer/config";

export default definePrismaConfig({
  orm: ormConfig({
    contract: "./prisma/contract.prisma",
    db: {
      connection: process.env["DATABASE_URL"]!,
    },
  }),
  composer: composer({
    entry: "./module.mjs", 
    extensions: [prismaCloud(), nodeBuild()],
    state: prismaState(),
  }),
});
