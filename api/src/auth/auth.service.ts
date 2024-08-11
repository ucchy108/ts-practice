import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const result = { email: user.email };

      return result;
    }

    return null;
  }

  async login(email: string) {
    const payload = { email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }
}
