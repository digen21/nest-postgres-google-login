import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OauthinfoService } from './oauthinfo.service';
import { CreateOauthinfoDto } from './dto/create-oauthinfo.dto';
import { UpdateOauthinfoDto } from './dto/update-oauthinfo.dto';

@Controller('oauthinfo')
export class OauthinfoController {
  constructor(private readonly oauthinfoService: OauthinfoService) {}

  @Post()
  create(@Body() createOauthinfoDto: CreateOauthinfoDto) {
    return this.oauthinfoService.create(createOauthinfoDto);
  }

  @Get()
  findAll() {
    return this.oauthinfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oauthinfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOauthinfoDto: UpdateOauthinfoDto) {
    return this.oauthinfoService.update(+id, updateOauthinfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oauthinfoService.remove(+id);
  }
}
