import { Router } from "express";
import { AdapterRouter } from "../../helpers/router";
import Auth from "./login";
import CreateAccount from "./create";
import bodyParser from "body-parser";
import { DI } from "../../helpers/database";

export default (app: Router, db: typeof DI): void => {
  app.use(bodyParser.json());
  app.post("/create", AdapterRouter(CreateAccount()));
  app.post("/login", AdapterRouter(Auth(db)));
};
