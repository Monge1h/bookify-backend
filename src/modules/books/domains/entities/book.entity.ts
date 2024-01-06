export class Book {
  private _id: number;
  private _title: string;
  private _author: string;
  private _isbn?: string;

  constructor(id: number, title: string, author: string, isbn: string) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._isbn = isbn;
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
}

export class UserBook extends Book {
  private _status: string;

  constructor(
    id: number,
    title: string,
    author: string,
    isbn: string,
    status: string,
  ) {
    super(id, title, author, isbn);
    this._status = status;
  }

  get status(): string {
    return this._status;
  }

  set status(status: string) {
    this._status = status;
  }
}
