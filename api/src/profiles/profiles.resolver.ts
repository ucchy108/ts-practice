// import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { ProfilesService } from './profiles.service';
// import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver('Profile')
export class ProfilesResolver {
  constructor(private profilesService: ProfilesService) {}

  @Query()
  async profile(@Args('userId') userId: number) {
    return this.profilesService.find(userId);
  }
}
