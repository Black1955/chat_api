import { Application, json } from "express";
import { UserRouter } from "../routers/userRouter";

export function ExpressApp(app: Application) {
  app.use(json()).use("/", UserRouter);
}
