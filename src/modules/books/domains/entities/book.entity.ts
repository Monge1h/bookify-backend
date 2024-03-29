export class Book {
  private _id: number;
  private _title: string;
  private _author: string;
  private _isbn?: string;
  private _genre?: string;
  private _description?: string;
  private _image?: string;
  private _year?: string;
  private _externalId?: string;

  constructor(
    id: number,
    title: string,
    author: string,
    isbn: string,
    genre?: string,
    image?: string,
    year?: string,
    description?: string,
    externalId?: string,
  ) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._isbn = isbn;
    this._genre = genre;
    this._image = image;
    this._year = year;
    this.description = description;
    this._externalId = externalId;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get author(): string {
    return this._author;
  }

  set author(author: string) {
    this._author = author;
  }

  get isbn(): string {
    return this._isbn;
  }

  set isbn(isbn: string) {
    this._isbn = isbn;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(genre: string) {
    this._genre = genre;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get image(): string {
    return this._image;
  }

  set image(image: string) {
    this._image = image;
  }

  get year(): string {
    return this._year;
  }

  set year(year: string) {
    this._year = year;
  }

  get externalId(): string {
    return this._externalId;
  }

  set externalId(externalId: string) {
    this._externalId = externalId;
  }
}

export class UserBook extends Book {
  private _status: string;

  constructor(
    id: number,
    title: string,
    author: string,
    isbn: string,
    status: string,
    genre?: string,
    image?: string,
    year?: string,
    description?: string,
    externalId?: string,
  ) {
    super(id, title, author, isbn, genre, image, year, description, externalId);
    this._status = status;
  }

  get status(): string {
    return this._status;
  }

  set status(status: string) {
    this._status = status;
  }
}

export class BookWithOwners extends Book {
  private _owners: UserBook[];

  constructor(
    id: number,
    title: string,
    author: string,
    isbn: string,
    genre?: string,
    image?: string,
    year?: string,
    description?: string,
    externalId?: string,
    owners?: any[],
  ) {
    super(id, title, author, isbn, genre, image, year, description, externalId);
    this._owners = owners;
  }

  get owners(): UserBook[] {
    return this._owners;
  }

  set owners(owners: UserBook[]) {
    this._owners = owners;
  }
}
