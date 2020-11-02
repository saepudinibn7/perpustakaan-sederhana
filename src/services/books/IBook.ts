import { Book } from "../../entities/Book";

export interface AddBook {
  add: (data: Book) => Promise<Book>;
}
