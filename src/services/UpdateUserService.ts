import { UserRepository } from "../repositories/UserRepository";

interface IUpdateUser {
  name: string;
  email: string;
}

class UpdateUserService {
  constructor(private userRepository: UserRepository) {}

  execute({ email, name }: IUpdateUser): void {
    this.userRepository.updateUser({ name, email });
  }
}

export { UpdateUserService };
