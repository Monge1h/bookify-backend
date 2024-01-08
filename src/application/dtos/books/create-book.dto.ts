// TODO add class validator
export class CreateBookDto {
  title: string;
  author: string;
  isbn?: string;
  userId: number;
  description?: string;
  image?: string;
  year?: string;
  genre?: string;
  externalId?: string;
}
