import { Express, Router } from "express";
import fs, { readdirSync } from "fs";
import DB from "./helpers/database";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);
  readdirSync(`${__dirname}/modules/`).map(async (folder) => {
    if (fs.existsSync(`${__dirname}/modules/${folder}/router.ts`)) {
      const db = await DB();
      (await import(`${__dirname}/modules/${folder}/router`)).default(
        router,
        db
      );
    }
  });
};
