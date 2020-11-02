import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Users } from "../../Users";
import { Book } from "../../Book";

@Entity({ tableName: "detail_pinjaman" })
export class DetailPinjaman {
  @PrimaryKey()
  _id: string;

  @ManyToMany(() => Users)
  users_id: Users;

  @ManyToMany(() => Book)
  book_id: Book;

  @Property()
  jumlah: string;

  @Property()
  denda: boolean;

  @Property()
  jumlah_denda: number;

  @Property()
  tanggal_kembali: string;

  constructor(
    _id: string,
    users_id: Users,
    book_id: Book,
    jumlah: string,
    denda: boolean,
    jumlah_denda: number,
    tanggal_kembali: string
  ) {
    this._id = _id;
    this.users_id = users_id;
    this.book_id = book_id;
    this.jumlah = jumlah;
    this.denda = denda;
    this.jumlah_denda = jumlah_denda;
    this.tanggal_kembali = tanggal_kembali;
  }
}
