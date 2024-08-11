import { Controller, UseGuards, Request, Body, Get, Put } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('profile')
export class ProfilesController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProfile(@Request() req) {
    return this.usersService.find(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(
    @Request() req,
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('password') password: string,
  ) {
    return this.usersService.update(Number(req.user.id), email, name, password);
  }
}
