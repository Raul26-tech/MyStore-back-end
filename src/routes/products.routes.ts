import { Router } from "express";
import { Product } from "../model/product";

const createProductsRoutes = Router();

const products: Product[] = [];

createProductsRoutes.post("/", (request, response) => {
  const { name, description, price, avaliation } = request.body;

  const productData = new Product();

  Object.assign(productData, {
    created_at: new Date(),
    name,
    description,
    price,
    avaliation,
  });

  products.push(productData);

  return response.status(201).json(products);
});

createProductsRoutes.get("/", (request, response) => {
  return response.json(products);
});

export { createProductsRoutes };
