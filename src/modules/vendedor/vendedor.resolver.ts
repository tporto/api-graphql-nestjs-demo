import { Resolver, Query, Args } from '@nestjs/graphql';
import { VendedorService } from './vendedor.service';
import { ClienteUser } from '../../models/cliente_user.model';

@Resolver()
export class VendedorResolver {

  constructor(private vendedorService: VendedorService) { }

  @Query(() => [ClienteUser])  
  async findRCAByCredor(@Args({ name: 'id', type: () => [Number]}) ids: number[]): Promise<ClienteUser[]> {  
    return await this.vendedorService.findRCAByCredor(ids);
  }

  @Query(() => [ClienteUser])
  async findSUPByCredor(@Args({ name: 'id', type: () => [Number] }) ids: number[]): Promise<ClienteUser[]> {
    return await this.vendedorService.findSUPByCredor(ids);
  }

}
