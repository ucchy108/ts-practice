import { Controller, UseGuards, Request, Body, Get, Put } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateProfileDto } from '../types';

@Controller('profile')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProfile(@Request() req) {
    return this.profilesService.find(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Request() req, @Body() updateProfile: UpdateProfileDto) {
    updateProfile.userId = req.user.id;

    return this.profilesService.update(updateProfile);
  }
}
