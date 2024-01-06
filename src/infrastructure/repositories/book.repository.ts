import { PrismaService } from '../persistence/prisma/prisma.service';
import { Book, UserBook } from 'src/modules/books/domains/entities/book.entity';
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

  async getBooksByUserId(userId: number): Promise<UserBook[]> {
    const books = await this.prisma.ownership.findMany({
      where: {
        userId: userId,
      },
      include: {
        book: true,
      },
    });

    return books.map(
      (book) =>
        new UserBook(
          book.book.id,
          book.book.title,
          book.book.author,
          book.book.isbn,
          book.status,
        ),
    );
  }
}
