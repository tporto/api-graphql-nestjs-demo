import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credor } from './credor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CredorService {

  constructor(@InjectRepository(Credor) private credorRepo: Repository<Credor>) {}

  async findAll(): Promise<Credor[]> {
    const data = await this.credorRepo.find({
      where: { status: 'A' }
    });

    return data;
  }

  async findById(id: number): Promise<Credor> {
    const data = await this.credorRepo.findOne(id);

    if (!data) {
      throw new NotFoundException(`Credor com ID "${id}" não encontrado.`);
    }

    return data;
  }

}
