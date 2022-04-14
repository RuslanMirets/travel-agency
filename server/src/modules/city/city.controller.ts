import { CreateCityDto } from './dto/create-city.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CityService } from './city.service';
import { Country } from 'src/core/decorators/country.decorator';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {}

  @Post()
  create(@Body() dto: CreateCityDto, @Country() countryId: number) {
    return this.cityService.create(dto, countryId);
  }

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get('russia')
  findAllRussia() {
    return this.cityService.findAllRussia();
  }
}
