import { UpdateKindDto } from './dto/update-kind.dto';
import { CreateKindDto } from './dto/create-kind.dto';
import { KindService } from './kind.service';
import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';

@Controller('kind')
export class KindController {
  constructor(private kindService: KindService) {}

  @Post()
  create(@Body() dto: CreateKindDto) {
    return this.kindService.create(dto);
  }

  @Get()
  findAll() {
    return this.kindService.findAll();
  }

  @Patch(':id')
  update(@Body() dto: UpdateKindDto, @Param('id') kindId: number) {
    return this.kindService.update(dto, kindId);
  }

  @Delete(':id')
  delete(@Param('id') kindId: number) {
    return this.kindService.delete(kindId);
  }

  @Delete()
  deleteAll() {
    return this.kindService.deleteAll();
  }
}
