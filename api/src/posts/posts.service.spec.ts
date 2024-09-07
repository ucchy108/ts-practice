import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrisma = {
  post: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
  },
};

describe('PostsService', () => {
  let service: PostsService;
  let prisma;

  const post = {
    id: 1,
    content: 'Post 1',
    authorId: 1,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    service = module.get<PostsService>(PostsService);
    prisma = module.get(PrismaService);
  });

  describe('findById', () => {
    it('Postを返す', async () => {
      prisma.post.findUnique.mockResolvedValue(post);

      const result = await service.find(post.id);
      expect(result).toEqual(post);
    });
  });
});
