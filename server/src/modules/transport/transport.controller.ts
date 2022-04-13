import { CreateTransportDto } from './dto/create-transport.dto';
import { TransportService } from './transport.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('transport')
export class TransportController {
  constructor(private transportService: TransportService) {}

  @Post()
  create(@Body() dto: CreateTransportDto) {
    return this.transportService.create(dto);
  }

  @Get()
  findAll() {
    return this.transportService.findAll();
  }
}
