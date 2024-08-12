import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Profile } from '@prisma/client';
import { UpdateProfileDto } from '../types';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async find(userId: number): Promise<Profile | null> {
    return await this.prisma.profile.findUnique({ where: { userId } });
  }

  async update(updateProfile: UpdateProfileDto): Promise<Profile | null> {
    const { userId, name, bio } = updateProfile;

    return await this.prisma.profile.update({
      where: { userId: Number(userId) },
      data: {
        name,
        bio,
      },
    });
  }
}
