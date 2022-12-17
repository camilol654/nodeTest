import { EntityTarget, Repository } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ConfigServer } from "./config";

export class BaseService<T extends BaseEntity> extends ConfigServer{
    public execRepository: Promise<Repository<T>>;
    constructor(private getEntoty:EntityTarget<>){
        super()
    }
}