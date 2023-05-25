import express from "express";
import { createUserRoutes } from "./routes/user.routes";

const app = express();

const port = 3333;

app.use(express.json());

app.listen(port);

app.use("/create-user", createUserRoutes);

console.log(
  `\n\n\n| WELCOME TO E-COMMERCE, SERVER IS RUNNING ON PORT ${port} |\n\n\n`
);

//ROTA PARA CRIAÇÂO DE USUÁRIO
