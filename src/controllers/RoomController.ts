import { Request, Response } from "express";
import RoomService from "../services/RoomService";
class RoomController {
  createRoom() {}
  createGroop() {}
  deleteRoom() {}
  deleteGroop() {}
  addUser() {}
  deleteUser() {}
  async fetchRooms(req: Request, res: Response) {
    try {
      const rooms = await RoomService.fetchRooms(req.userId);
      res.json(rooms);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new RoomController();
