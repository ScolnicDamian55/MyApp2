import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(name: string): User {
    const user = { id: this.idCounter++, name };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(u => u.id === id);
  }

  update(id: number, name: string): User {
    const user = this.findOne(id);
    if (user) user.name = name;
    return user;
  }

  remove(id: number) {
    this.users = this.users.filter(u => u.id !== id);
    return { message: `User ${id} deleted` };
  }
}
