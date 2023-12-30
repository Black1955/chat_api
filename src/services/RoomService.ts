import ws from "ws";
import User from "../models/User";
import Chat from "../models/chats/Chat";
class RoomService {
  async fetchRooms(id: string) {
    try {
      return await Chat.find({ userIds: { $in: [id] } });
    } catch (error) {
      throw new Error("something goes wrong");
    }
  }
  async fetchMasseges(roomid: string, page: string, count: string) {}
  async createRoom(myId: string, userId: string, users: Map<string, ws>) {}
  async createGroop(name: string, myId: string) {}
}

export default new RoomService();
