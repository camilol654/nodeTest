
import express from "express";
import morgan from "morgan";
import cors from "cors";


class StartServer {
    public app: express.Application = express();
    public port: number = 3000;

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(morgan("dev"));
        this._main();

    }

    private _main() {
        this.app.listen(this.port, () => console.log("this service is running in port :", this.port))

    }
}

new StartServer();