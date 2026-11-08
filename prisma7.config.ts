import "dotenv/config";
import { defineConfig, env } from "prisma/config";



 export default defineConfig({
    migrations: {
      seed: "tsx /MyApps/my-travels/prisma/seed.ts",
    },
    datasource: {
      url: env("DATABASE_URL"),
    },
  })