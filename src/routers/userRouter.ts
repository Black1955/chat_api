import { Router } from "express";
import UserController from "../controllers/UserController";
export const UserRouter = Router();
UserRouter.post("/signin", UserController.login);
UserRouter.post("/signup", UserController.register);
