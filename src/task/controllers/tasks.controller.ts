
import { Request, Response } from "express";

export class TasksController {
    getTask(req: Request, res: Response) {
        try{
            res.status(200).json({
                task: "created"
            })
        }
        catch{
            console.log("error")
        }
    }
}