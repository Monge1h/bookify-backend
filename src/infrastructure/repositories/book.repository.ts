import { PrismaService } from '../persistence/prisma/prisma.service';
import { Book, UserBook } from 'src/modules/books/domains/entities/book.entity';
import { Injectable } from '@nestjs/common';
import { IBookRepository } from 'src/modules/books/domains/repositories/ibook.repository';

type BookWithOwnership = Book & { userId: number; status: string };

@Injectable()
export class BookRepository implements IBookRepository {
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
          book.book.genre,
          book.book.image,
          book.book.year,
          book.book.description,
          book.book.externalId,
        ),
    );
  }
  async updateBookStatus(book: BookWithOwnership): Promise<boolean> {
    const updateOwnership = await this.prisma.ownership.update({
      where: {
        bookId_userId: {
          bookId: book.id,
          userId: book.userId,
        },
      },
      data: {
        status: book.status, // todo add validation to this field with an enum of possible values (Read, Reading, NotStarted)
      },
    });
    return updateOwnership ? true : false;
  }

  async deleteOwnership(bookId: number, userId: number): Promise<boolean> {
    const deleteOwnership = await this.prisma.ownership.delete({
      where: {
        bookId_userId: {
          bookId: bookId,
          userId: userId,
        },
      },
    });
    return deleteOwnership ? true : false;
  }
}
