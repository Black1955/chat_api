import { verify, decode } from "jsonwebtoken";
export default class TokenService {
  static checkToken(token: string): boolean {
    verify(token, process.env.JWT_PHRASE!, (err: any) => {
      if (err) {
        return false;
      }
    });
    return true;
  }
  static createToken() {}
  static getPayload(token: string) {
    return decode(token);
  }
}
