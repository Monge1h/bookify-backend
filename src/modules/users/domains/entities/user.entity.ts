export class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  setPassword(newPassword: string) {
    this._password = newPassword;
  }
}
