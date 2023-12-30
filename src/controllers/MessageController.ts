import RoomService from "../services/RoomService";
import { Request, Response } from "express";
class MessageController {
  deleteMessage() {}
  editMessage() {}
  async fetchMessages(req: Request, res: Response) {
    const { roomid, page, count } = req.query;
    try {
      const massages = await RoomService.fetchMasseges(
        String(roomid),
        String(page),
        String(count)
      );
      res.json(massages);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new MessageController();
