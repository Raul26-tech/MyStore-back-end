import { Router } from "express";
import { Product } from "../model/product";
import { ProductRepository } from "../repositories/ProductRepository";
import { CreateProductService } from "../services/CreateProductService";

const createProductsRoutes = Router();
const createProductRepository = new ProductRepository();

const products: Product[] = [];

createProductsRoutes.post("/", (request, response) => {
  const { name, description, price, avaliation } = request.body;

  const createProduct = new CreateProductService(createProductRepository);

  createProduct.execute({ name, avaliation, description, price });

  return response.status(201).json(products);
});

createProductsRoutes.get("/", (request, response) => {
  const all = createProductRepository.listProducts();

  return response.json(all);
});

export { createProductsRoutes };
