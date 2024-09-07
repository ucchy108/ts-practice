import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesService } from './profiles.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrisma = {
  profile: {
    findUnique: jest.fn(),
    update: jest.fn(),
  },
};

describe('ProfilesService', () => {
  let service: ProfilesService;
  let prisma;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfilesService,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    service = module.get<ProfilesService>(ProfilesService);
    prisma = module.get(PrismaService);
  });

  const profile = {
    id: 1,
    name: 'Profile 1',
    bio: 'Bio',
    userId: 1,
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#find', () => {
    it('Profileを返す', async () => {
      prisma.profile.findUnique.mockResolvedValue(profile);

      const result = await service.find(profile.userId);
      expect(result).toEqual(profile);
    });
  });
});
