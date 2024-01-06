import { Book } from '../entities/book.entity';

export interface IBookRepository {
  createBook(book: Book): Promise<Book>;
  findBookById(id: number): Promise<Book | null>;
  updateBook(book: Book): Promise<Book>;
  deleteBook(id: number): Promise<void>;
  findAllBooks(): Promise<Book[]>;
  findBookByOwnerId(ownerId: number): Promise<Book[]>;
  createBookWithOwnership(book: Book, userId: number): Promise<Book>;
}
