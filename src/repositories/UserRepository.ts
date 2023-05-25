import { User } from "../model/user";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    number: number;
    district: string;
    city: string;
    uf: string;
  };
}

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, email, password, address }: ICreateUserDTO): void {
    const userData: User = new User();

    Object.assign(userData, {
      created_at: new Date(),
      name,
      email,
      password,
      address,
    });

    this.users.push(userData);
  }

  listUsers(): User[] {
    return this.users;
  }

  findByName(name: string): User {
    const user = this.users.find((userExist) => userExist.name === name);
    return user;
  }
}

export { UserRepository };
