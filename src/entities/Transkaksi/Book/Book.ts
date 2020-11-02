import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "transaksi_buku" })
export class BookTransaksi {
  @PrimaryKey()
  _id: string;

  @Property()
  users_id: string;

  @Property()
  detail_id: string;

  @Property()
  created_at = new Date();

  @Property()
  updated_at = null;

  constructor(_id: string, users_id: string, detail_id: string) {
    this._id = _id;
    this.users_id = users_id;
    this.detail_id = detail_id;
  }
}
