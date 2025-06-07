import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LienProfessionnelService } from './lien_professionnel.service';
import { LienProfessionnel } from './entities/lien_professionnel.entity';
import { CreateLienProfessionnelInput } from './dto/create-lien_professionnel.input';
import { UpdateLienProfessionnelInput } from './dto/update-lien_professionnel.input';

@Resolver(() => LienProfessionnel)
export class LienProfessionnelResolver {
  constructor(private readonly lienProfessionnelService: LienProfessionnelService) {}

  @Mutation(() => LienProfessionnel)
  createLienProfessionnel(@Args('createLienProfessionnelInput') createLienProfessionnelInput: CreateLienProfessionnelInput) {
    return this.lienProfessionnelService.create(createLienProfessionnelInput);
  }

  @Query(() => [LienProfessionnel], { name: 'lienProfessionnel' })
  findAll() {
    return this.lienProfessionnelService.findAll();
  }

  @Query(() => LienProfessionnel, { name: 'lienProfessionnel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lienProfessionnelService.findOne(id);
  }

  @Mutation(() => LienProfessionnel)
  updateLienProfessionnel(@Args('updateLienProfessionnelInput') updateLienProfessionnelInput: UpdateLienProfessionnelInput) {
    return this.lienProfessionnelService.update(updateLienProfessionnelInput.id, updateLienProfessionnelInput);
  }

  @Mutation(() => LienProfessionnel)
  removeLienProfessionnel(@Args('id', { type: () => Int }) id: number) {
    return this.lienProfessionnelService.remove(id);
  }
}
