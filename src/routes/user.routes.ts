import { Router } from "express";
import { UserRepository } from "../repositories/UserRepository";

const createUserRoutes = Router();
const userRepository = new UserRepository();

createUserRoutes.post("/", (request, response) => {
  const { name, email, password, address } = request.body;

  const userAlreadyExist = userRepository.findByName(name);

  if (userAlreadyExist) {
    return response.status(400).json({ error: "Usuário já existente!" });
  }

  userRepository.create({
    name,
    email,
    password,
    address,
  });

  return response.status(201).send();
});

createUserRoutes.get("/", (request, response) => {
  const all = userRepository.listUsers();

  return response.json(all);
});

export { createUserRoutes };
