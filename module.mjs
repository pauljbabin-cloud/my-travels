// @ts-check
import { module } from "@prisma/composer";
import { postgres, dataContract } from "@prisma/composer-prisma-cloud/orm";
import myTravelsContractJson from "./src/prisma/contract.json" with { type: "json" };
import myTravelsService from "./service.mjs";

export default module("my-travels", ({ provision }) => {
  const database = provision(postgres({ name: "database", contract: dataContract(myTravelsContractJson), config: "./prisma.config.ts" }));
  provision(myTravelsService, { id: "mytravels", deps: { db: database } });
});
