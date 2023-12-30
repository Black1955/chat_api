import { Schema, model } from "mongoose";

const User = new Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  email: {
    type: String,
    default: "",
    required: true,
  },
  password: {
    type: String,
    default: "",
    required: true,
  },
  lastActivityDate: {
    type: Schema.Types.Date,
    required: false,
    default: Date(),
  },
});

export default model("User", User);
