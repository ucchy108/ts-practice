import { Injectable } from '@nestjs/common';

type Post = {
  id: number;
  content: string;
};

@Injectable()
export class PostsService {
  async findById(id: number) {
    const post: Post = {
      id,
      content: 'hoge',
    };
    return post;
  }

  async findByAll() {
    const posts: Post[] = [
      { id: 1, content: 'Post 1' },
      { id: 2, content: 'Post 2' },
      { id: 3, content: 'Post 3' },
      { id: 4, content: 'Post 4' },
      { id: 5, content: 'Post 5' },
    ];

    return posts;
  }
}
