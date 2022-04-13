import { ComfortService } from './comfort.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateComfortDto } from './dto/create-comfort.dto';

@Controller('comfort')
export class ComfortController {
  constructor(private comfortService: ComfortService) {}

  @Post()
  create(@Body() dto: CreateComfortDto) {
    return this.comfortService.create(dto);
  }

  @Get()
  findAll() {
    return this.comfortService.findAll();
  }
}
