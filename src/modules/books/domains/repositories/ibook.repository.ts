import { Book } from '../entities/book.entity';

export interface IBookRepository {
  //   createBook(book: Book): Promise<Book>;
  //   findBookById(id: number): Promise<Book | null>;
  updateBookStatus(book: Book): Promise<boolean>;
  //   deleteBook(id: number): Promise<void>;
  //   findAllBooks(): Promise<Book[]>;
  getBooksByUserId(userId: number): Promise<Book[]>;
  //   findBookByOwnerId(ownerId: number): Promise<Book[]>;
  createBookWithOwnership(book: Book, userId: number): Promise<Book>;
  deleteOwnership(bookId: number, userId: number): Promise<boolean>;
}
