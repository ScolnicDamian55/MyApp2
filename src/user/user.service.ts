import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(name: string): User {
    const user: User = { id: this.idCounter++, name };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  update(id: number, name: string): User {
    const user = this.findOne(id);
    user.name = name;
    return user;
  }

  remove(id: number): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) throw new NotFoundException(`User with id ${id} not found`);
    this.users.splice(index, 1);
  }
}
