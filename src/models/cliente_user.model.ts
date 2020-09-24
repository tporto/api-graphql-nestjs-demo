import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Field, ObjectType, Int } from "@nestjs/graphql";
import { User } from "./user.model";

@ObjectType()
@Entity('cliente_user')
export class ClienteUser {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  // @Field()
  // @Column('"\\"RCA\\""')
  // rca: string;

  // @Column('SUP')
  // sup: string;
  
  @Field()
  @Column({ name: 'user_id' })
  user_id: number;

  // @Column()
  // supervisor_id: number;
  
  // @Column()
  // cliente_id: number;

  // @ManyToMany(() => Credor)
  // credor: Credor[];

  // @ManyToMany(() => User, user => user.clientes_users)
  @Field()  
  @ManyToOne(type => User, user => user.clientes)
  @JoinColumn({ name: 'user_id' })
  user: User;

  // @ManyToMany(() => ClienteUser)
  // supervisor: ClienteUser;  

  @Field(() => Int)
  totalCount: number;
}