import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LienProfessionnel } from './entities/lien_professionnel.entity';
import { CreateLinkInput } from './dto/create-lien_professionnel.input';
import { UpdateLienProfessionnelInput } from '../lien_professionnel/dto/update-lien_professionnel.input';

@Injectable()
export class LienProfessionnelService {
  constructor(
    @InjectRepository(LienProfessionnel)
    private linkRepository: Repository<LienProfessionnel>,
  ) {}

  async create(createLinkInput: CreateLinkInput): Promise<LienProfessionnel> {
    const link = this.linkRepository.create(createLinkInput);
    return this.linkRepository.save(link);
  }

  async findAll(): Promise<LienProfessionnel[]> {
    return this.linkRepository.find({
      relations: ['freelancer'],
    });
  }

  async findOne(id: number): Promise<LienProfessionnel> {
    const link = await this.linkRepository.findOne({
      where: { id },
      relations: ['freelancer'],
    });
    if (!link) {
      throw new NotFoundException(`Link #${id} not found`);
    }
    return link;
  }

  async update(id: number, updateLinkInput: UpdateLienProfessionnelInput): Promise<LienProfessionnel> {
    const link = await this.findOne(id);
    Object.assign(link, updateLinkInput);
    return this.linkRepository.save(link);
  }

  async remove(id: number): Promise<LienProfessionnel> {
    const link = await this.findOne(id);
    return this.linkRepository.remove(link);
  }
}
