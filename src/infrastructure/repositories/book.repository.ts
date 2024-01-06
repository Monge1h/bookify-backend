import { PrismaService } from '../persistence/prisma/prisma.service';
import { Book } from 'src/modules/books/domains/entities/book.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository {
  constructor(private prisma: PrismaService) {}

  async createBookWithOwnership(book: Book, userId: number): Promise<Book> {
    const createdBook = await this.prisma.book.create({
      data: {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
      },
    });

    await this.prisma.ownership.create({
      data: {
        bookId: createdBook.id,
        userId: userId,
        status: 'Owned',
      },
    });

    return new Book(
      createdBook.id,
      createdBook.title,
      createdBook.author,
      createdBook.isbn,
    );
  }
}
