import { Injectable } from '@nestjs/common';
import { CreateUserReqDto } from './dto/create-user.req.dto';
import { UpdateUserReqDto } from './dto/update-user.req.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserResDto } from './dto/user.res.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async create(createUserReqDto: CreateUserReqDto) :Promise<UserResDto> {
    const user = await this.userRepository.create(createUserReqDto);
    await this.userRepository.save(user);
    return plainToInstance(UserResDto, user)
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserReqDto: UpdateUserReqDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
