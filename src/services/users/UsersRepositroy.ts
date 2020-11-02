import { DI } from "../../helpers/database";
import { Users } from "../../entities/Users";
import { AddUsers, findUser } from "./IUsers";

export class UsersRepository implements AddUsers, findUser {
  constructor(private di: typeof DI) {}
  async save(data: Users): Promise<Users> {
    const insert = this.di.orm.em.create(Users, data);
    this.di.orm.em.persist(insert);
    this.di.orm.em.flush();
    return insert;
  }

  async findOne(id: string): Promise<Users | any> {
    const match = await this.di.orm.em.findOne(Users, { username: id });
    if (match) return match;
    return false;
  }
}
