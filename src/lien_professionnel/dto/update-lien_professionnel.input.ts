import { CreateLienProfessionnelInput } from './create-lien_professionnel.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLienProfessionnelInput extends PartialType(CreateLienProfessionnelInput) {
  @Field(() => Int)
  id: number;
}
