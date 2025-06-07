import { Module } from '@nestjs/common';
import { LienProfessionnelService } from './lien_professionnel.service';
import { LienProfessionnelResolver } from './lien_professionnel.resolver';

@Module({
  providers: [LienProfessionnelResolver, LienProfessionnelService],
})
export class LienProfessionnelModule {}
