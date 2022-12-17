import { Router } from "express";

export class BaseRoutres<T>{
    public router: Router;
    public controller: T;
    //public middelware:U
    constructor(Tcontroller: { new(): T }) {
        this.router = Router();
        this.controller = new Tcontroller();
        this.routes();
    }

    routes(){}
}