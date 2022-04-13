import { CreateContinentDto } from './dto/create-continent.dto';
import { ContinentService } from './continent.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('continent')
export class ContinentController {
  constructor(private continentService: ContinentService) {}

  @Post()
  create(@Body() dto: CreateContinentDto) {
    return this.continentService.create(dto);
  }

  @Get()
  findAll() {
    return this.continentService.findAll();
  }
}
