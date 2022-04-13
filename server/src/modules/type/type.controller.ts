import { CreateTypeDto } from './dto/create-type.dto';
import { TypeService } from './type.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Post()
  create(@Body() dto: CreateTypeDto) {
    return this.typeService.create(dto);
  }

  @Get()
  findAll() {
    return this.typeService.findAll();
  }
}
