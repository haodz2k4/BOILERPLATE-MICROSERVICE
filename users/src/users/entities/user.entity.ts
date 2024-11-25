import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserStatus } from "../constants/user.constant";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column({
        length: 200,
        nullable: false
    })
    fullName: string;

    @Column({
        length: 50,
        unique: true,
        nullable: false
    })
    email: string;

    @Column({
        length: 30,
        nullable: false
    })
    phone: string;

    @Column({
        nullable: false
    })
    password: string;

    @Column({
        type: 'enum',
        enum: UserStatus
    })
    status: UserStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
