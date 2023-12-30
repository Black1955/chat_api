import User from "../models/User";
import { sign, verify, decode } from "jsonwebtoken";
import bcrypt from "bcrypt";
// import { configDotenv } from "dotenv";
import UserDTO from "../dto/userDTO";
class UserService {
  private async hashPassword(password: string): Promise<string> {
    const salz = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salz);
  }

  private async existUser(email: string) {
    const userCheck = await User.findOne({ email });
    return Boolean(userCheck);
  }

  async register({ email, name, password }: UserDTO) {
    const userCheck = await this.existUser(email);
    if (userCheck) {
      throw new Error("user alredy exist");
    } else {
      const pass = await this.hashPassword(password);
      const user = await User.create({ name, email, password: pass });
      const token = sign(
        {
          id: user._id,
          email,
        },
        process.env.JWT_PHRASE!,
        { expiresIn: "24h" }
      );
      return { token };
    }
  }
  async login({ email, password }: UserDTO) {
    const userDB = await User.findOne({ email });
    if (!userDB) {
      throw new Error("unvalid password or email");
    } else {
      const pass = await bcrypt.compare(password, userDB.password);
      if (!pass) {
        throw new Error("unvalid password or email");
      }
      const token = sign(
        {
          id: userDB._id,
          email,
        },
        process.env.JWT_PHRASE!,
        { expiresIn: "24h" }
      );
      return { token, user: userDB };
    }
  }
  async findUser(nickname: string) {
    const user = await User.find({ name: nickname });
    return user;
  }
  async addUserToGroup(roomId: string, userId: string) {}
}

export default new UserService();
