import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Field, ObjectType, Int } from "@nestjs/graphql";
import { ClienteUser } from "./cliente_user.model";

@ObjectType()
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field()
  @Column()  
  name: string;

  @Field()
  @Column()  
  email: string;

  @Column()
  tipo: string;

  @Field()
  @Column()
  tipo_cliente: string;

  @OneToMany(() => ClienteUser, cliente => cliente.user)
  clientes: ClienteUser[];
}