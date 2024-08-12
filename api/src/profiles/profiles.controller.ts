import { Controller, UseGuards, Request, Body, Get, Put } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUserDto } from '../types';

@Controller('profile')
export class ProfilesController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProfile(@Request() req) {
    return this.usersService.findByEmail(req.user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() updateUser: UpdateUserDto) {
    return this.usersService.update(updateUser);
  }
}
