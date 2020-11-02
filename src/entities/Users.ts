import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import * as bcryptjs from "bcryptjs";

@Entity()
export class Users {
  @PrimaryKey()
  _id: string;

  @Property()
  name: string;

  @Property()
  username: string;

  @Property({
    onCreate: (input: any) => bcryptjs.hashSync(input.password, 10),
    onUpdate: (input: any) => bcryptjs.hashSync(input.password, 10),
  })
  password: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(_id: string, name: string, username: string, password: string) {
    this._id = _id;
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
