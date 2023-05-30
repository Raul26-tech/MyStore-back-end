import { ProductRepository } from "../repositories/ProductRepository";

interface ICreateProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  avaliation: string;
}

class CreateProductService {
  constructor(private productRepository: ProductRepository) {}

  execute({ id, avaliation, description, name, price }: ICreateProduct): void {
    this.productRepository.create({ id, name, price, avaliation, description });
  }
}

export { CreateProductService };
