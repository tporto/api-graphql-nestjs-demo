import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../../models/user.model';

@Resolver('User')
export class UserResolver {

  constructor(private userService: UserService) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Query(() => User)
  async findUserById(@Args('id') id: number): Promise<User> {
    return await this.userService.findById(id);
  }

}
