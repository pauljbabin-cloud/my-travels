// @ts-check
import nextjs from "@prisma/composer/nextjs";
import { compute } from "@prisma/composer-prisma-cloud";
import { postgres, dataContract } from "@prisma/composer-prisma-cloud/orm";
import myTravelsContractJson from "./src/prisma/contract.json" with { type: "json" };

export default compute({
  name: "my-travels",
  deps: { db: postgres(dataContract(myTravelsContractJson)) },
  build: nextjs({ module: import.meta.url, appDir: "." }),
});
