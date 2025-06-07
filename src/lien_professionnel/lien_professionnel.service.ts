import { Injectable } from '@nestjs/common';
import { CreateLienProfessionnelInput } from './dto/create-lien_professionnel.input';
import { UpdateLienProfessionnelInput } from './dto/update-lien_professionnel.input';

@Injectable()
export class LienProfessionnelService {
  create(createLienProfessionnelInput: CreateLienProfessionnelInput) {
    return 'This action adds a new lienProfessionnel';
  }

  findAll() {
    return `This action returns all lienProfessionnel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lienProfessionnel`;
  }

  update(id: number, updateLienProfessionnelInput: UpdateLienProfessionnelInput) {
    return `This action updates a #${id} lienProfessionnel`;
  }

  remove(id: number) {
    return `This action removes a #${id} lienProfessionnel`;
  }
}
