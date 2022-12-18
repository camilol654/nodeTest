
import { BaseRoutres } from "../shared/routes/router";
import { PriorityController } from "./controllers/priority.controller"

export class PriorityRouter extends BaseRoutres<PriorityController> {
    constructor() {
        super(PriorityController);
    }

    routes(): void {
        this.router.get("/priority", (req, res) => this.controller.getPriorities(req, res));
        this.router.get("/priority/:id", (req, res) =>
            this.controller.getPriorityById(req, res)
        );
        this.router.post("/createPriority", (req, res) =>
            this.controller.createPriority(req, res)
        );
        this.router.put("/updatePriority/:id", (req, res) =>
            this.controller.updatePriority(req, res)
        );
        this.router.delete("/deletePriority/:id", (req, res) =>
            this.controller.deletePriority(req, res)
        );
    }
}