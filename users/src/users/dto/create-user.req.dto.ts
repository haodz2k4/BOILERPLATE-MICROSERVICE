import { IsEmail, IsEnum, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { UserStatusEnum } from "../enum/status.enum";

export class CreateUserReqDto {

    @IsString()
    fullName: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsEnum(UserStatusEnum)
    @IsOptional()
    status?: UserStatusEnum
}
