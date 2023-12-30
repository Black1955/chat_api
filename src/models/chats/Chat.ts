import { Schema, model } from "mongoose";

const Chat = new Schema(
  {
    userIds: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      unique: true,
    },
  },
  { discriminatorKey: "Chat" }
);

export default model("Chat", Chat);
