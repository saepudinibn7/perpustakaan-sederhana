import { Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { DetailPinjaman } from "./Detail";
import { Users } from "../../Users";

@Entity({ tableName: "pinjaman" })
export class TransaksiPinjaman {
  @PrimaryKey()
  _id: string;

  @ManyToMany(() => Users)
  users_id: Users;

  @ManyToMany(() => DetailPinjaman)
  detail_id: DetailPinjaman;

  @Property()
  created_at = new Date();

  @Property({ nullable: true })
  updated_at = null;

  constructor(_id: string, users_id: Users, detail_id: DetailPinjaman) {
    this._id = _id;
    this.users_id = users_id;
    this.detail_id = detail_id;
  }
}
