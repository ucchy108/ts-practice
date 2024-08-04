import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findBy(email: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { email } })
  }

  async create(email: string, name: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10)
    return this.prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    })
  }
}
