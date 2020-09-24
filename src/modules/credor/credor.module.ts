import { Module } from '@nestjs/common';
import { CredorService } from './credor.service';
import { CredorResolver } from './credor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credor } from '../../models/credor.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Credor])
  ],
  providers: [CredorService, CredorResolver]
})
export class CredorModule {}
