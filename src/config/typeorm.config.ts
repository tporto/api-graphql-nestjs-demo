import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'developer',
  password: '123456',
  database: 'postgres',
  schema: 'protestojadb',
  entities: [__dirname + '/../**/*.model{.ts,.js}'],
  synchronize: false
};