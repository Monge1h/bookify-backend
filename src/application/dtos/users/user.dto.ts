export class UserDto {
  id: number;
  name: string;
  email: string;

  constructor(data: {
    id: number;
    name: string;
    email: string;
    password?: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
  }
}
