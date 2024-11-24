import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";


export class AbstractEntity extends BaseEntity {

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
}