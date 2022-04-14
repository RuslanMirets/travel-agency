import { CreateCountryDto } from './dto/create-country.dto';
import { CountryService } from './country.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Post()
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get('russia')
  findAllRussia() {
    return this.countryService.findAllRussia();
  }

  @Get('abroad')
  findAllAbroad() {
    return this.countryService.findAllAbroad();
  }
}
