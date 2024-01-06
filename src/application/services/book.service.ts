import { CreateBookDto } from '../dtos/books/create-book.dto';
import { Book } from 'src/modules/books/domains/entities/book.entity';
import { BookRepository } from 'src/infrastructure/repositories/book.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async createBookWithOwnership(bookDto: CreateBookDto): Promise<Book> {
    const newBook = new Book(null, bookDto.title, bookDto.author, bookDto.isbn);

    return this.bookRepository.createBookWithOwnership(newBook, bookDto.userId);
  }
}
