import { MikroORM } from "@mikro-orm/core";
import { Controller } from "../../../helpers/interface/controller";
import { AuthorizationController } from "./controller";
import { UsersRepository } from "../../../services/users/UsersRepositroy";
import { DI } from "../../../helpers/database";

export default (database: typeof DI): Controller => {
  const repository = new UsersRepository(DI);
  const controller = new AuthorizationController(repository);
  return controller;
};
