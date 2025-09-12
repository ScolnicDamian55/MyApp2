import { Injectable } from '@nestjs/common';

export interface PostEntity {
  id: number;
  title: string;
  content: string;
  userId: number;
}

@Injectable()
export class PostService {
  private posts: PostEntity[] = [];
  private idCounter = 1;

  create(title: string, content: string, userId: number): PostEntity {
    const post = { id: this.idCounter++, title, content, userId };
    this.posts.push(post);
    return post;
  }

  findAll(): PostEntity[] {
    return this.posts;
  }

  findOne(id: number): PostEntity {
    return this.posts.find(p => p.id === id);
  }

  update(id: number, title: string, content: string): PostEntity {
    const post = this.findOne(id);
    if (post) {
      post.title = title;
      post.content = content;
    }
    return post;
  }

  remove(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
    return { message: `Post ${id} deleted` };
  }

  findByUser(userId: number): PostEntity[] {
    return this.posts.filter(p => p.userId === userId);
  }
}
