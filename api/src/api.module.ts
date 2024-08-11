import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [AuthModule, ProfilesModule],
})
export class ApiModule {}
