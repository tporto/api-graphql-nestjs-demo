import { Resolver, Query, Args } from '@nestjs/graphql';
import { CredorService } from './credor.service';
import { Credor } from '../../models/credor.model';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Credor')
export class CredorResolver {

  constructor(private credorService: CredorService) { }

  @Query(() => [Credor])
  async findAllCredor(): Promise<Credor[]> {
    return await this.credorService.findAll();
  }

  @Query(() => Credor)
  async findCredorById(@Args('id', ParseIntPipe) id: number): Promise<Credor> {
    return await this.credorService.findById(id);
  }

}
