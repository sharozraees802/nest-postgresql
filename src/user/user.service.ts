import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public user: User[] = [
    {
      username: 'User1',
      password: 'admin',
      email: 'user1@gmail.com',
      age: 21,
    },
    {
      username: 'User2',
      password: 'admin',
      email: 'user2@gmail.com',
      age: 22,
    },
    {
      username: 'User2',
      password: 'admin',
      email: 'user2@gmail.com',
      age: 23,
    },
  ];
  getUserByName(UserName: string): User {
    return this.user.find((user) => user.username == UserName);
  }
}
