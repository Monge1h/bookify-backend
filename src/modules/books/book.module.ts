import { Module } from '@nestjs/common';
import { BookController } from '../../presentation/controllers/book.controller';
import { BookService } from '../../application/services/book.service';
import { BookRepository } from '../../infrastructure/repositories/book.repository';
import { PrismaService } from '../../infrastructure/persistence/prisma/prisma.service';
import { PrismaModule } from '../../infrastructure/persistence/prisma/prisma.module';
import { BookSearchService } from 'src/infrastructure/integrations/googleBooks/googleBooks.service';

@Module({
  imports: [PrismaModule],
  controllers: [BookController],
  providers: [BookService, BookRepository, PrismaService, BookSearchService],
  exports: [BookService],
})
export class BookModule {}
