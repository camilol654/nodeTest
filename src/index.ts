
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { TaskRouter } from "./shared/routes/task.route";
import { ConfigServer } from "./config/config";
import { DataSource } from "typeorm";


class StartServer extends ConfigServer {
    public app: express.Application = express();
    public port: number = this.getNumberEnv('PORT') || 3000;

    constructor() {
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.dbConnect();
        this.app.use(morgan("dev"));
        this.app.use("/api", this.routers());
        this._main();

    }

    routers(): Array<express.Router> {
        return [new TaskRouter().router];

    }

    async dbConnect(): Promise<DataSource | void> {
        return this.initConnect
          .then(() => {
            console.log("Connect Success");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    

    private _main() {
        this.app.listen(this.port, () => console.log("this service is running in port :", this.port))

    }
}

new StartServer();