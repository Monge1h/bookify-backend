import { CreateBookDto } from '../dtos/books/create-book.dto';
import { Book, UserBook } from 'src/modules/books/domains/entities/book.entity';
import { BookRepository } from 'src/infrastructure/repositories/book.repository';
import { Injectable } from '@nestjs/common';

type BookWithOwnership = Book & { userId: number; status: string };

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async createBookWithOwnership(bookDto: CreateBookDto): Promise<Book> {
    const newBook = new Book(
      null,
      bookDto.title,
      bookDto.author,
      bookDto.isbn,
      bookDto.genre,
      bookDto.image,
      bookDto.year,
      bookDto.description,
      bookDto.externalId,
    );

    return this.bookRepository.createBookWithOwnership(newBook, bookDto.userId);
  }

  async getBooksByUserId(userId: number): Promise<UserBook[]> {
    return await this.bookRepository.getBooksByUserId(userId);
  }

  async updateBookStatus(book: BookWithOwnership): Promise<boolean> {
    return await this.bookRepository.updateBookStatus(book);
  }

  async deleteBook(bookId: number, userId: number): Promise<boolean> {
    return await this.bookRepository.deleteOwnership(bookId, userId);
  }
}
