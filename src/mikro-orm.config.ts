import { Options } from "@mikro-orm/core";
import { Users } from "./entities/Users";
import { Book } from "./entities/Book";
import { BookTransaksi } from "./entities/Transkaksi/Book/Book";
import { DetailBookTransaksi } from "./entities/Transkaksi/Book/Detail";
import { TransaksiPinjaman } from "./entities/Transkaksi/Pinjaman/Pinjaman";
import { DetailPinjaman } from "./entities/Transkaksi/Pinjaman/Detail";

const options: Options = {
  entities: [
    Users,
    Book,
    BookTransaksi,
    DetailBookTransaksi,
    TransaksiPinjaman,
    DetailPinjaman,
  ],
  host: "0.0.0.0",
  port: 2500,
  dbName: "ract",
  user: "root",
  password: "rootpwd",
  type: "mysql", // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
};

export default options;
