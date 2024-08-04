import { Controller, Request, Get, UseGuards, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return this.usersService.findBy(req.user.email)
  }

  @Post()
  async create(@Body('email') email: string, @Body('password') password: string, @Body('name') name: string) {
    return this.usersService.create(email, name, password)
  }
}
