import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

const mockPrismaService = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;
  let prisma;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get(PrismaService);
  });

  describe('findBy', () => {
    it('shoud return user', async () => {
      const existingUser = {
        id: 1,
        name: 'existing-user',
        email: 'existing@example.com',
        password: 'password',
      };
      // NOTE: PrismaのfindUniqueの振る舞いを定義
      prisma.user.findUnique.mockResolvedValue(existingUser);

      expect(service.find).not.toHaveBeenCalled;

      const result = await service.find(existingUser.id);
      expect(result).toEqual(existingUser);

      expect(service.find).toHaveBeenCalled;
    });
  });
});
