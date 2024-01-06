import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { BookModule } from './modules/books/book.module';

@Module({
  imports: [UserModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
