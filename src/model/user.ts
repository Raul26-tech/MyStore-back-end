import { v4 as uuidv4 } from "uuid";

class User {
  id?: string;
  created_at: Date;
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

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
