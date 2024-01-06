import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from 'src/application/services/book.service';
import { CreateBookDto } from 'src/application/dtos/books/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private userService: BookService) {}

  @Post()
  async createBooOWnership(@Body() createBookDto: CreateBookDto) {
    createBookDto.userId = 1; // todo get user id from request jwt token
    return this.userService.createBookWithOwnership(createBookDto);
  }

  @Get('user')
  async getBooksByUserId() {
    return this.userService.getBooksByUserId(1); // todo get user id from request jwt token
  }
}
