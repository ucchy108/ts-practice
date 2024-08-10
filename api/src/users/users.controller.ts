import {
  Controller,
  Request,
  Get,
  UseGuards,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getProfile(@Param('id') id: string, @Request() req) {
    if (id !== String(req.user.id)) throw new NotFoundException();

    return this.usersService.find(Number(req.user.id));
  }

  @Post()
  async create(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string,
  ) {
    return this.usersService.create(email, name, password);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Request() req,
    @Param('id') id: string,
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('password') password: string,
  ) {
    if (id !== String(req.user.id)) throw new NotFoundException();

    return this.usersService.update(Number(id), email, name, password);
  }
}
