import { MikroORM, Options, EntityManager } from "@mikro-orm/core";
import config from "../mikro-orm.config";

export default async () => {
  DI.orm = await MikroORM.init(config);
  DI.em = DI.orm.em;
  return DI;
};

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
};

export const DB = () => {
  return new Promise(async (resolve, reject) => {
    DI.orm = await MikroORM.init(config);
    DI.em = DI.orm.em;
    resolve(DI);
  });
};

export type ORM = {
  em: EntityManager;
};
