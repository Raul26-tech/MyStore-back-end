import { Router } from "express";
import { User } from "../model/user";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserService } from "../services/CreateUserService";

const createUserRoutes = Router();
const userRepository = new UserRepository();

const users: User[] = [];

createUserRoutes.post("/", (request, response) => {
  const { name, email, password, address } = request.body;

  const createUserService = new CreateUserService(userRepository);

  createUserService.execute({ name, email, password, address });

  return response.status(201).json(users);
});

createUserRoutes.get("/", (request, response) => {
  const all = userRepository.listUsers();

  return response.json(all);
});

export { createUserRoutes };
