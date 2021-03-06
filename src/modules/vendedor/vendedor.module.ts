import { Module } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { VendedorResolver } from './vendedor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteUser } from '../../models/cliente_user.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClienteUser])
  ],
  providers: [VendedorService, VendedorResolver]
})
export class VendedorModule {}
