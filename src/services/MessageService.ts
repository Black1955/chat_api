import ws from "ws";
import Message from "../models/Message";
import Chat from "../models/chats/Chat";
import mongoose from "mongoose";
class MessageService {
  async sendMessage(
    roomId: string,
    users: Map<string, ws>,
    userId: string,
    message: string
  ) {
    try {
      const mess = await Message.create({ chatId: roomId, message, userId });
      const chat = await Chat.findById(roomId);
      users.forEach((client, id) => {
        if (chat?.userIds.includes(new mongoose.Types.ObjectId(id)))
          client.send(JSON.stringify(mess));
      });
    } catch (error) {}
  }
}

export default new MessageService();
