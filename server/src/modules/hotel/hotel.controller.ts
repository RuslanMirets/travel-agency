import { CreateHotelDto } from './dto/create-hotel.dto';
import { HotelService } from './hotel.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { City } from 'src/core/decorators/city.decorator';
import { Complex } from 'src/core/decorators/complex.decorator';

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post()
  create(@Body() dto: CreateHotelDto, @City() cityId: number, @Complex() complexId: number) {
    return this.hotelService.create(dto, cityId, complexId);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }
}
