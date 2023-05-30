import { UserRepository } from "../repositories/UserRepository";
import { v4 as uuidv4 } from "uuid";

interface ICreateUser {
  id?: string;
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

class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  execute({ id, name, address, email, password }: ICreateUser): void {
    const userAlreadyExists = this.userRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    this.userRepository.create({ id, name, password, email, address });
  }
}

export { CreateUserService };
