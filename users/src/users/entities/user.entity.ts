import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "../../databases/abstract.entity";
import { UserStatusEnum } from "../enum/status.enum";

@Entity('users')
export class UserEntity extends AbstractEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 200,
        nullable: false
    })
    fullName: string;

    @Column({
        length: 50,
        nullable: false,
        unique: true 
    })
    email: string;

    @Column({
        length: 30,
        nullable: false
    })
    phone: string;

    @Column({
        length: 255,
        nullable: false
    })
    password: string;

    @Column({
        type: 'enum',
        enum: UserStatusEnum
    })
    status: UserStatusEnum;

    @DeleteDateColumn()
    deletedAt: Date;

    
}
