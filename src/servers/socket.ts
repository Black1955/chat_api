import { Server } from "http";
import ws, { WebSocketServer } from "ws";
import TokenService from "../services/TokenService";
import MessageService from "../services/MessageService";
export function SocketServer(server: Server) {
  const wss = new WebSocketServer({ noServer: true });
  const users = new Map<string, ws>();
  server.on("upgrade", (req, client, head) => {
    const url = new URL(req.url!, `ws://${req.headers.host}`);
    const at = url.searchParams.get("at");

    if (!at || !TokenService.checkToken(at!)) {
      client.write("error");
      client.destroy();
      return;
    } else {
      wss.handleUpgrade(req, client, head, ws => {
        wss.emit("connection", ws, req);
      });
    }
  });

  wss.on("connection", async (client, req) => {
    //@ts-ignore
    const { id } = TokenService.getPayload(req.headers["authorization"]!);
    users.set(id, client);
    client.on("message", data => {
      const massage = JSON.parse(data.toString());
      switch (massage.type) {
        case "SEND_MASSAGE":
          MessageService.sendMessage(
            massage.roomId,
            users,
            id,
            massage.massage
          );
          case"CREATE_CHAT":
            

        default:
          break;
      }
    });
    client.on("close", () => {
      users.delete(id);
      client.close();
    });
  });
}
