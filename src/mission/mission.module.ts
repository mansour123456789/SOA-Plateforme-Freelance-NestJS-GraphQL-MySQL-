import { Module } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionResolver } from './mission.resolver';

@Module({
  providers: [MissionResolver, MissionService],
})
export class MissionModule {}
