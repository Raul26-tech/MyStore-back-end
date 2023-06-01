import { Router } from "express";
import { User } from "../model/user";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { UpdateUserService } from "../services/UpdateUserService";

const createUserRoutes = Router();
const userRepository = new UserRepository();

const users: User[] = [];

createUserRoutes.post("/", (request, response) => {
  const { name, email, password, address } = request.body;

  const createUser = new CreateUserService(userRepository);

  createUser.execute({ name, email, password, address });

  return response.status(201).json(users);
});

createUserRoutes.get("/", (request, response) => {
  const all = userRepository.listUsers();

  return response.json(all);
});

createUserRoutes.patch("/", (request, response) => {
  const { name, email } = request.body;

  const updateUser = new UpdateUserService(email);

  return response.status(201).json(updateUser);
});

export { createUserRoutes };
