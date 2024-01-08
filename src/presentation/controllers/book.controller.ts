import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { BookService } from 'src/application/services/book.service';
import { BookSearchService } from 'src/infrastructure/integrations/googleBooks/googleBooks.service';
import { CreateBookDto } from 'src/application/dtos/books/create-book.dto';

@Controller('books')
export class BookController {
  constructor(
    private bookService: BookService,
    private bookSearchService: BookSearchService,
  ) {}

  @Post()
  async createBooOWnership(@Body() createBookDto: CreateBookDto) {
    createBookDto.userId = 1; // todo get user id from request jwt token
    return this.bookService.createBookWithOwnership(createBookDto);
  }

  @Get('user')
  async getBooksByUserId() {
    return this.bookService.getBooksByUserId(1); // todo get user id from request jwt token
  }

  @Get('search')
  async search(@Query('q') query: string) {
    return this.bookSearchService.searchBooks(query);
  }

  @Delete(':bookId')
  async deleteOwnership(@Param('bookId') bookId: number): Promise<any> {
    return this.bookService.deleteBook(+bookId, 1); // todo get user id from request jwt token
  }
}
