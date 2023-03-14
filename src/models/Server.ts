import express, { Application } from "express";

class Server {
  private app: Application;
  private port: String;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("App listening on:", this.port);
    });
  }
}

export default Server;
