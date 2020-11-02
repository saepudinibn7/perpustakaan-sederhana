import { Book } from "../../entities/Book";
import { AddBook } from "./IBook";

export class BookRepository implements AddBook {
  constructor() {}

  async add(data: Book): Promise<Book> {
    return data;
  }
}
