import { CreateComplexDto } from './dto/create-complex.dto';
import { ComplexService } from './complex.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

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
}
