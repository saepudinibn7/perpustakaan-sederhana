import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "detail_transaksi_buku" })
export class DetailBookTransaksi {
  @PrimaryKey()
  _id: string;

  @Property()
  book_id: string;

  @Property()
  jumlah: number;

  @Property()
  type: string;

  constructor(_id: string, book_id: string, jumlah: number, type: string) {
    this._id = _id;
    this.book_id = book_id;
    this.jumlah = jumlah;
    this.type = type;
  }
}
