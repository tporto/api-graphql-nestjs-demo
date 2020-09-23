import { Module } from '@nestjs/common';
import { CredorModule } from './modules/credor/credor.module';
import { VendedorModule } from './modules/vendedor/vendedor.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { UsersModule } from './modules/user/user.module';
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
