export type GoogleBooksApiResponse = {
  items: GoogleBookItem[];
};

export type GoogleBookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    industryIdentifiers: IndustryIdentifier[];
    pageCount?: number;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    imageLinks: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    language?: string;
  };
};

export type IndustryIdentifier = {
  type: string;
  identifier: string;
};
