import { Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from '../database/entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserEntity], { name: 'users' })
  users(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }
}

