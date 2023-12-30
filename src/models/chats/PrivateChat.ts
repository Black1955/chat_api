import Chat from "./Chat";
import { Schema } from "mongoose";

const Private = new Schema({
  name: {
    type: String,
    require: true,
    default: "",
  },
});
const PrivateChat = Chat.discriminator("PrivateChat", Private);

export default PrivateChat;
