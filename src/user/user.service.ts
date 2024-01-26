import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANTS } from '../constants';

@Injectable()
export class UserService {
  public user: User[] = [
    {
      username: 'User1',
      password: 'admin',
      email: 'user1@gmail.com',
      age: 21,
      role: CONSTANTS.ROLES.ANDROIDE_DEVELOPER,
    },
    {
      username: 'User2',
      password: 'admin',
      email: 'user2@gmail.com',
      age: 22,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
    {
      username: 'User2',
      password: 'admin',
      email: 'user2@gmail.com',
      age: 23,
      role: CONSTANTS.ROLES.ANDROIDE_DEVELOPER,
    },
  ];
  getUserByName(UserName: string): User {
    return this.user.find((user) => user.username == UserName);
  }
}
