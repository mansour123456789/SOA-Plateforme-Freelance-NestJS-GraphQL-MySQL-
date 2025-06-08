import { Module } from '@nestjs/common';
import { LienProfessionnelService } from './lien_professionnel.service';
import { LinkResolver } from './lien_professionnel.resolver';

@Module({
  providers: [LinkResolver, LienProfessionnelService],
})
export class LienProfessionnelModule {}
