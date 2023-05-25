import { v4 as uuidv4 } from "uuid";

interface ICreateUserDTO {
  id: string;
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
  create({ name, email, password, address }: ICreateUserDTO) {
    console.log(name, email, password);
  }
}

export default new CreateUserService();
