import http from "http";
import express from "express";
import { ExpressApp } from "./servers/server";
import { SocketServer } from "./servers/socket";

const app = express();
const server = http.createServer(app);

ExpressApp(app);
SocketServer(
  server.listen(5000, () => {
    console.log("server has been started");
  })
);
