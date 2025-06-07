import { Test, TestingModule } from '@nestjs/testing';
import { LienProfessionnelService } from './lien_professionnel.service';

describe('LienProfessionnelService', () => {
  let service: LienProfessionnelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LienProfessionnelService],
    }).compile();

    service = module.get<LienProfessionnelService>(LienProfessionnelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
