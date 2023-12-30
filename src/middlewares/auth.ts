import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export default function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers["authorization"];
    if (!token) throw new Error("old tocken");
    jwt.verify(token, process.env.JWT_PHRASE!, (err: any) => {
      if (err) {
        throw new Error("token is expired");
      }
    });
    //@ts-ignore
    req.userId = jwt.decode(token)!.id;
    next();
  } catch (error) {
    next(new Error("unexprected error"));
  }
}
