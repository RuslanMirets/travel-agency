import { CreateTourDto } from './dto/create-tour.dto';
import { TourService } from './tour.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Hotel } from 'src/core/decorators/hotel.decorator';
import { Type } from 'src/core/decorators/type.decorator';
import { Transport } from 'src/core/decorators/transport.decorator';
import { Comfort } from 'src/core/decorators/comfort.decorator';

@Controller('tour')
export class TourController {
  constructor(private tourService: TourService) {}

  @Post()
  create(
    @Body() dto: CreateTourDto,
    @Type() typeId: number,
    @Hotel() hotelId: number,
    @Transport() transportId: number,
    @Comfort() comfortId: number,
  ) {
    return this.tourService.create(dto, typeId, hotelId, transportId, comfortId);
  }

  @Get()
  findAll() {
    return this.tourService.findAll();
  }
}
