import { Injectable } from '@nestjs/common';
import { CreatePostDto } from 'src/types';
import { Post } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async find(id: number) {
    return await this.prisma.post.findUnique({ where: { id } });
  }

  async findByAll() {
    return await this.prisma.post.findMany();
  }

  async create(createPost: CreatePostDto): Promise<Post | null> {
    const { content, authorId } = createPost;

    return await this.prisma.post.create({
      data: {
        content,
        authorId: Number(authorId),
      },
    });
  }
}
