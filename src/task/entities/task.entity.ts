
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PriorityEntity } from "./priority.entity";
import { StatusEntity } from "./status.entity";

@Entity({ name: "task" })
export class TaskEntity extends BaseEntity {

    @Column()
    name!: string;

    @Column()
    desc!: string;

    @Column()
    beginDate!: Date;

    @Column()
    endDate!: Date;

    @Column({ nullable: true })
    taskFather!: string;

    @ManyToOne(() => PriorityEntity, Priority => Priority.priorityTask)
    @JoinColumn({ name: "priority_id" })
    priorityTask!: PriorityEntity;


    @ManyToOne(() => StatusEntity, status => status.statusTask)
    @JoinColumn({ name: "status_id" })
    statusTask!: StatusEntity;
}