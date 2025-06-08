import { CreateLinkInput } from './create-lien_professionnel.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLienProfessionnelInput extends PartialType(CreateLinkInput) {
  @Field(() => Int)
  id: number;
}
