import { Test, TestingModule } from '@nestjs/testing';
import { LienProfessionnelResolver } from './lien_professionnel.resolver';
import { LienProfessionnelService } from './lien_professionnel.service';

describe('LienProfessionnelResolver', () => {
  let resolver: LienProfessionnelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LienProfessionnelResolver, LienProfessionnelService],
    }).compile();

    resolver = module.get<LienProfessionnelResolver>(LienProfessionnelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
