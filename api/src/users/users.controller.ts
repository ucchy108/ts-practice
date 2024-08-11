import { Controller, Request, Get, UseGuards, Body, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return this.usersService.find(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async update(
    @Request() req,
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('password') password: string,
  ) {
    return this.usersService.update(Number(req.user.id), email, name, password);
  }
}
