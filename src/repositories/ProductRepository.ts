import { Product } from "../model/product";

interface ICreateProductDTO {
  id: string;
  created_at: string;
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
