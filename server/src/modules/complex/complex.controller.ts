import { CreateComplexDto } from './dto/create-complex.dto';
import { ComplexService } from './complex.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateComplexDto } from './dto/update-complex.dto';

@Controller('complex')
export class ComplexController {
  constructor(private complexService: ComplexService) {}

  @Post()
  create(@Body() dto: CreateComplexDto) {
    return this.complexService.create(dto);
  }

  @Get()
  findAll() {
    return this.complexService.findAll();
  }

  @Patch(':id')
  update(@Body() dto: UpdateComplexDto, @Param('id') complexId: number) {
    return this.complexService.update(dto, complexId);
  }

  @Delete(':id')
  delete(@Param('id') complexId: number) {
    return this.complexService.delete(complexId);
  }

  @Delete()
  deleteAll() {
    return this.complexService.deleteAll();
  }
}
