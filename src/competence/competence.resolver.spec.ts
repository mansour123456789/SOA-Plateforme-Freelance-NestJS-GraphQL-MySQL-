import { Test, TestingModule } from '@nestjs/testing';
import { CompetenceResolver } from './competence.resolver';
import { CompetenceService } from './competence.service';

describe('CompetenceResolver', () => {
  let resolver: CompetenceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetenceResolver, CompetenceService],
    }).compile();

    resolver = module.get<CompetenceResolver>(CompetenceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
