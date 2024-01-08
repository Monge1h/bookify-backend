import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsString()
  @IsOptional()
  isbn?: string;

  @IsOptional()
  userId: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  year?: string;

  @IsString()
  @IsOptional()
  genre?: string;

  @IsString()
  externalId?: string;
}
