import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from '../types';
import { BadRequestException } from '@nestjs/common';

const mockPrismaService = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;
  let prisma;
  const user = {
    id: 1,
    name: 'existing-user',
    email: 'existing@example.com',
    password: 'password',
  };

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

  describe('find', () => {
    it('shoud return user', async () => {
      // NOTE: PrismaのfindUniqueの振る舞いを定義
      prisma.user.findUnique.mockResolvedValue(user);

      expect(service.find).not.toHaveBeenCalled;

      const result = await service.find(user.id);
      expect(result).toEqual(user);

      expect(service.find).toHaveBeenCalled;
    });
  });

  describe('findByEmail', () => {
    it('ユーザーを返す', async () => {
      prisma.user.findUnique.mockResolvedValue(user);

      const result = await service.findByEmail(user.email);
      expect(result).toEqual(user);
    });
  });

  describe('create', () => {
    it('すでに存在するユーザーを作成しようとした時例外を発生させる', async () => {
      prisma.user.findUnique.mockResolvedValue(user);

      const createUserDto: CreateUserDto = {
        email: user.email,
        name: user.name,
        password: user.password,
      };

      expect(service.create(createUserDto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('作成されたUserを返す', async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      prisma.user.create.mockResolvedValue(user);

      const createUserDto: CreateUserDto = {
        email: user.email,
        name: user.name,
        password: user.password,
      };

      const result = await service.create(createUserDto);
      expect(result).toEqual(user);
    });
  });

  describe('update', () => {
    describe('Emailが重複した時', () => {
      it('例外を発生させる', async () => {
        prisma.user.findUnique.mockResolvedValue(user);
        const updateUser: UpdateUserDto = {
          id: String(user.id),
          email: user.email,
          name: user.name,
          password: user.password,
        };

        const result = service.update(updateUser);
        expect(result).rejects.toThrow(BadRequestException);
      });
    });

    it('更新されたUserを返す', async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      prisma.user.update.mockResolvedValue(user);

      const updateUser: UpdateUserDto = {
        id: String(user.id),
        email: user.email,
        name: user.name,
        password: user.password,
      };

      const result = await service.update(updateUser);
      expect(result).toEqual(user);
    });
  });
});
