import { Schema, model } from "mongoose";

const Message = new Schema({
  message: {
    type: String,
    required: true,
    default: "",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  chatId: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
  },
  time: {
    type: Schema.Types.Date,
    required: false,
    default: Date(),
  },
});

export default model("Message", Message);
