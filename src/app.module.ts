import { Module } from '@nestjs/common';
import { CredorModule } from './credor/credor.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { ClienteModule } from './cliente/cliente.module';
import { UsersModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    CredorModule, 
    VendedorModule, 
    ClienteModule, 
    UsersModule
  ],
  controllers: [],
  providers: [
    
  ],
})
export class AppModule {}
