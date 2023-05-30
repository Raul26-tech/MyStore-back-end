import { Product } from "../model/product";
import { v4 as uuidv4 } from "uuid";

interface ICreateProductDTO {
  id: string;
  name: string;
  description?: string;
  price: number;
  avaliation?: string;
}

class ProductRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  create({ name, avaliation, description, price }: ICreateProductDTO): void {
    const product = new Product();

    Object.assign(product, {
      id: uuidv4(),
      created_at: new Date(),
      name,
      avaliation,
      description,
      price,
    });

    this.products.push(product);
  }

  listProducts(): Product[] {
    return this.products;
  }
}

export { ProductRepository };
