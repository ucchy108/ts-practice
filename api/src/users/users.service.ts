import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from '../types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async find(id: number): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async create(createUser: CreateUserDto): Promise<User | null> {
    const { email, name, password } = createUser;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser)
      throw new BadRequestException('このemailは既に使われています');

    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  }

  async update(updateUser: UpdateUserDto): Promise<User> {
    const { id, email, name, password } = updateUser;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser)
      throw new BadRequestException('このemailは既に使われています');

    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}
