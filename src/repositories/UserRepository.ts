import { User } from "../model/user";
import { v4 as uuidv4 } from "uuid";

interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password?: string;
  address?: {
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
    const userData = new User();

    Object.assign(userData, {
      id: uuidv4(),
      created_at: new Date(),
      name,
      email,
      password,
      address,
    });

    this.users.push(userData);
    console.log(userData);
  }

  listUsers(): User[] {
    return this.users;
  }

  findByName(name: string): User {
    const user = this.users.find((userExist) => userExist.name === name);
    return user;
  }

  updateUser({ name, email }: ICreateUserDTO): User {
    const updateUser = new User();

    Object.assign(updateUser, {
      id: uuidv4(),
      created_at: new Date(),
      name,
      email,
    });

    return updateUser;
  }
}

export { UserRepository };
