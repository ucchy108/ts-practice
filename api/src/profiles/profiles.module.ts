import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProfilesResolver } from './profiles.resolver';

@Module({
  imports: [PrismaModule],
  providers: [ProfilesService, ProfilesResolver],
})
export class ProfilesModule {}
