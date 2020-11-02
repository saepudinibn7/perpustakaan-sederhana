import { RequestContext } from "@mikro-orm/core";
import database from "./helpers/database";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();

database().then(async (DI) => {
  app.listen(process.env.PORT_APP, () => {
    console.log(`Runing on Port ${process.env.PORT_APP}`);
  });
  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
});
