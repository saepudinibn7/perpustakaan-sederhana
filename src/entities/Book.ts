import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Book {
  @PrimaryKey()
  _id: string;

  @Property()
  name: string;

  @Property()
  author: string;

  @Property()
  publish: string;

  @Property()
  stok: number;

  constructor(
    _id: string,
    name: string,
    author: string,
    publish: string,
    stok: number
  ) {
    this._id = _id;
    this.name = name;
    this.author = author;
    this.publish = publish;
    this.stok = stok;
  }
}
