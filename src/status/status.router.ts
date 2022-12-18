import { BaseRoutres } from "../shared/routes/router";
import { StatusController } from "./controller/status.controller";


export class StatusRouter extends BaseRoutres<StatusController> {
    constructor() {
        super(StatusController);
    }

    routes(): void {
        this.router.get("/status", (req, res) => this.controller.getStatus(req, res));
        this.router.get("/Status/:id", (req, res) =>
            this.controller.getStatusById(req, res)
        );
        this.router.post("/createStatus", (req, res) =>
            this.controller.createStatus(req, res)
        );
        this.router.put("/updateStatus/:id", (req, res) =>
            this.controller.updateStatus(req, res)
        );
        this.router.delete("/deleteStatus/:id", (req, res) =>
            this.controller.deleteStatus(req, res)
        );
    }
}