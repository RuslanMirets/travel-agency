import { CreateCountryDto } from './dto/create-country.dto';
import { CountryService } from './country.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Continent } from 'src/core/decorators/continent.decorator';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Post()
  create(@Body() dto: CreateCountryDto, @Continent() continentId: number) {
    return this.countryService.create(dto, continentId);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }
}
