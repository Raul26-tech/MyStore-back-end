import express from "express";
import { createUserRoutes } from "./routes/user.routes";
import { createProductsRoutes } from "./routes/products.routes";

const app = express();

const port = 3333;

app.use(express.json());

app.listen(port);

console.log(
  `\n\n\n| WELCOME TO E-COMMERCE, SERVER IS RUNNING ON PORT ${port} |\n\n\n`
);

// ROTA PARA CRIAÇÂO DE USUÁRIO
app.use("/create-user", createUserRoutes);

// ROTA LISTAR O USUÁRIO
app.use("/users", createUserRoutes);

// ROTA PARA A CRIAÇÂO DO PRODUTO
app.use("/create-products", createProductsRoutes);

// LISTANDO PRODUTOS
app.use("/products", createProductsRoutes);

app.use("/users", createUserRoutes);
