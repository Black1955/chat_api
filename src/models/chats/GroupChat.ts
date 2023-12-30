import Chat from "./Chat";
import { Schema } from "mongoose";

const Group = new Schema({
  name: {
    type: String,
    require: true,
    default: "",
  },
});
const GroupChat = Chat.discriminator("GroupChat", Group);

export default GroupChat;
