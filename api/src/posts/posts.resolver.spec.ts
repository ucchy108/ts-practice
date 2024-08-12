import { Test, TestingModule } from '@nestjs/testing';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

const mockPostsService = {
  findById: jest.fn(),
  findByAll: jest.fn(),
};

describe('PostsResolver', () => {
  let resolver: PostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsResolver,
        {
          provide: PostsService,
          useValue: mockPostsService,
        },
      ],
    }).compile();

    resolver = module.get<PostsResolver>(PostsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
