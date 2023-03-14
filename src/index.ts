import Server from "./models/Server";
import dotenv from "dotenv";

dotenv.config();

// Crearemos una instancia de la clase Server
const server = new Server();

server.listen();
