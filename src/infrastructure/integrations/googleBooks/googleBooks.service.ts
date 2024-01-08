import axios from 'axios';
import {
  GoogleBooksApiResponse,
  GoogleBookItem,
  IndustryIdentifier,
} from './googleBooks.types';
import { Book } from 'src/modules/books/domains/entities/book.entity';

export class BookSearchService {
  private readonly API_URL = 'https://www.googleapis.com/books/v1/volumes';

  async searchBooks(query: string): Promise<GoogleBooksApiResponse> {
    try {
      const response = await axios.get(
        `${this.API_URL}?q=${encodeURIComponent(query)}&&maxResults=20`,
      );
      return response.data.items.map((book) => this.transformToBookModel(book));
    } catch (error) {
      throw new Error('Error on search book');
    }
  }

  private transformToBookModel(item: GoogleBookItem): Book {
    const book = new Book(
      null,
      item.volumeInfo.title,
      item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
      this.extractISBN(item.volumeInfo.industryIdentifiers),
      item.volumeInfo.categories ? item.volumeInfo.categories[0] : '',
      item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
      item.volumeInfo.publishedDate,
      item.volumeInfo.description,
      item.id,
    );

    return book;
  }

  private extractISBN(identifiers: IndustryIdentifier[]): string | undefined {
    if (!identifiers) {
      return undefined;
    }
    const isbn = identifiers.find(
      (id) => id.type === 'ISBN_13' || id.type === 'ISBN_10',
    );
    return isbn ? isbn.identifier : undefined;
  }
}
