import { Injectable } from '@nestjs/common';
import { CreateOauthinfoDto } from './dto/create-oauthinfo.dto';
import { UpdateOauthinfoDto } from './dto/update-oauthinfo.dto';

@Injectable()
export class OauthinfoService {
  create(createOauthinfoDto: CreateOauthinfoDto) {
    return 'This action adds a new oauthinfo';
  }

  findAll() {
    return `This action returns all oauthinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oauthinfo`;
  }

  update(id: number, updateOauthinfoDto: UpdateOauthinfoDto) {
    return `This action updates a #${id} oauthinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} oauthinfo`;
  }
}
