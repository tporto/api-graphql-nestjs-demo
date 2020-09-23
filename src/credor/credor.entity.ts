import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
@Entity('clientes')
export class Credor {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Field()
  @Column()
  cnpj: string;

  @Field()
  @Column()
  nome: string;

  @Field()
  @Column()
  fantasia: string;

  @Field()
  @Column()
  status: string;
}