
import { TasksController } from "../../task/controllers/tasks.controller";
import { BaseRoutres } from "./router";

export class TaskRouter extends BaseRoutres<TasksController>{
    constructor() {
        super(TasksController);
    }

    routes(): void {
        this.router.get('/task', (req, res) => {
            this.controller.getTask(req, res)
        })
    }
}