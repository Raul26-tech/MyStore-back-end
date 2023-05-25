import { Router } from "express";
import { User } from "../model/user";

const createUserRoutes = Router();

const users: User[] = [];

createUserRoutes.post("/", (request, response) => {
  const { name, email, password, address } = request.body;

  const userData: User = new User();

  Object.assign(userData, {
    created_at: new Date(),
    name,
    email,
    password,
    address,
  });

  users.push(userData);

  return response.status(201).json(users);
});

export { createUserRoutes };
