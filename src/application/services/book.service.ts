import { CreateBookDto } from '../dtos/books/create-book.dto';
import { Book, UserBook } from 'src/modules/books/domains/entities/book.entity';
import { BookRepository } from 'src/infrastructure/repositories/book.repository';
import { Injectable } from '@nestjs/common';

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

  async updateBookStatus(
    bookId: number,
    userId: number,
    status: string,
  ): Promise<boolean> {
    return await this.bookRepository.updateBookStatus(bookId, userId, status);
  }

  async deleteBook(bookId: number, userId: number): Promise<boolean> {
    return await this.bookRepository.deleteOwnership(bookId, userId);
  }

  async getBookByExternalId(externalId: string): Promise<Book | null> {
    return await this.bookRepository.getBookByExternalId(externalId);
  }
}
