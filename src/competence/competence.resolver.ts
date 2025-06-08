import { Resolver } from '@nestjs/graphql';
import { CompetenceService } from './competence.service';

@Resolver()
export class CompetenceResolver {
  constructor(private readonly competenceService: CompetenceService) {}
}
