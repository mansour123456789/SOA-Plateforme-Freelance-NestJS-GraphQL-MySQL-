import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LienProfessionnel } from './entities/lien_professionnel.entity';
import { CreateLinkInput } from './dto/create-lien_professionnel.input';
import { UpdateLinkInput } from './dto/update-lien_professionnel.input';
import { LinkService } from './lien_professionnel.service';

@Resolver(() => LienProfessionnel)
export class LinkResolver {
  constructor(private readonly linkService: LinkService) {}

  @Query(() => [LienProfessionnel])
  async liens(): Promise<LienProfessionnel[]> {
    return this.linkService.findAll();
  }

  @Query(() => LienProfessionnel, { nullable: true })
  async lien(@Args('id', { type: () => Int }) id: number): Promise<LienProfessionnel> {
    return this.linkService.findOne(id);
  }

  @Mutation(() => LienProfessionnel)
  async createLien(
    @Args('createLinkInput') createLinkInput: CreateLinkInput,
  ): Promise<LienProfessionnel> {
    return this.linkService.create(createLinkInput);
  }

  @Mutation(() => LienProfessionnel)
  async updateLien(
    @Args('updateLinkInput') updateLinkInput: UpdateLinkInput,
  ): Promise<LienProfessionnel> {
    return this.linkService.update(updateLinkInput.id, updateLinkInput);
  }

  @Mutation(() => LienProfessionnel)
  async removeLien(@Args('id', { type: () => Int }) id: number): Promise<LienProfessionnel> {
    return this.linkService.remove(id);
  }
}