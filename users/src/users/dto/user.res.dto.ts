import { Exclude, Expose } from "class-transformer";

@Exclude()
export class UserResDto {

    @Expose()
    id: string;

    @Expose()
    fullName: string;

    @Expose()
    email: string;

    @Expose({
        toPlainOnly: true 
    })
    password: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}