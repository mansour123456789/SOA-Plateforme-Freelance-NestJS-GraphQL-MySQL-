import { Module } from '@nestjs/common';
import { CompetenceService } from './competence.service';
import { CompetenceResolver } from './competence.resolver';

@Module({
  providers: [CompetenceResolver, CompetenceService],
})
export class CompetenceModule {}
