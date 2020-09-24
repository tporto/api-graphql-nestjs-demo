import { Injectable, Body, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepo.find({
      where: { tipo: 'A' }
    });
    
    return users;
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepo.findOne(id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID "${id}" não encontrado.`);
    }

    return user;
  }

}
