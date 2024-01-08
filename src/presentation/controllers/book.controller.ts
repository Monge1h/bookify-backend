import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookService } from 'src/application/services/book.service';
import { BookSearchService } from 'src/infrastructure/integrations/googleBooks/googleBooks.service';
import { CreateBookDto } from 'src/application/dtos/books/create-book.dto';

@Controller('books')
export class BookController {
  constructor(
    private userService: BookService,
    private bookSearchService: BookSearchService,
  ) {}

  @Post()
  async createBooOWnership(@Body() createBookDto: CreateBookDto) {
    createBookDto.userId = 1; // todo get user id from request jwt token
    return this.userService.createBookWithOwnership(createBookDto);
  }

  @Get('user')
  async getBooksByUserId() {
    return this.userService.getBooksByUserId(1); // todo get user id from request jwt token
  }

  @Get('search')
  async search(@Query('q') query: string) {
    return this.bookSearchService.searchBooks(query);
  }
}
