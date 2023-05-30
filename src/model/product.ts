import { v4 as uuidv4 } from "uuid";

class Product {
  id?: string;
  created_at?: string;
  name: string;
  description: string;
  price: number;
  avaliation: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Product };
