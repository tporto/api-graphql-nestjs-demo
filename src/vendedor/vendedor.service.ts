import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteUser } from './cliente_user.entity';

@Injectable()
export class VendedorService {

  constructor(
    @InjectRepository(ClienteUser)
    private vendedorRepo: Repository<ClienteUser>
  ) { }

  async findRCAByCredor(ids: number[]): Promise<ClienteUser[]> {        
    const data = await this.vendedorRepo.createQueryBuilder('cliente_user')
      .innerJoinAndSelect('cliente_user.user', 'user')
      .where("user.tipo_cliente = 'V'")
      .andWhere('cliente_user."RCA" is not null')
      .andWhere("cliente_user.cliente_id IN (:...ids)", { ids })
      .getMany();

    return data;
  }

  async findSUPByCredor(ids: number[]): Promise<ClienteUser[]> {
    const data = await this.vendedorRepo.createQueryBuilder('cliente_user')
      .innerJoinAndSelect('cliente_user.user', 'user')
      .where("user.tipo_cliente = 'V'")
      .andWhere('cliente_user."SUP" is not null')
      .andWhere("cliente_user.cliente_id IN (:...ids)", { ids })
      .getMany();

    return data;
  }

}
