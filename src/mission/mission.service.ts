import { Injectable } from '@nestjs/common';
import { CreateMissionInput } from './dto/create-mission.input';
import { UpdateMissionInput } from './dto/update-mission.input';

@Injectable()
export class MissionService {
  create(createMissionInput: CreateMissionInput) {
    return 'This action adds a new mission';
  }

  findAll() {
    return `This action returns all mission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mission`;
  }

  update(id: number, updateMissionInput: UpdateMissionInput) {
    return `This action updates a #${id} mission`;
  }

  remove(id: number) {
    return `This action removes a #${id} mission`;
  }
}
