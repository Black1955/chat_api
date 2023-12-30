import { Request, Response } from "express";
import User from "../dto/userDTO";
import UserService from "../services/UserService";
class UserController {
  async register(req: Request<{}, {}, User>, res: Response) {
    try {
      const user = await UserService.register(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async login(req: Request<{}, {}, User>, res: Response) {
    try {
      const user = await UserService.login(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async findUser(req: Request, res: Response) {
    const { nickname } = req.body;
    try {
      const user = await UserService.findUser(nickname);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();
