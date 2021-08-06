import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'; 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    // 'This action adds a new user';
    const userExists = await this.usersRepository.findOne({email: createUserDto.email}); 
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST); 
    }
    const res = await this.usersRepository.save(createUserDto);
    return res; 
  }

  findAll() {
    //`This action returns all users`;
    return this.usersRepository.find(); 
  }

  findOne(id: number) {
    // `This action returns a #${id} user`;
    return this.usersRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    // return `This action removes a #${id} user`;
    return this.usersRepository.delete(id);
  }
}
