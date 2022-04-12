import { CountryService } from './../country/country.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './models/city.model';
import { CITY_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CityService {
  constructor(
    @Inject(CITY_REPOSITORY) private readonly cityRepository: typeof City,
    private readonly countryService: CountryService,
  ) {}

  async create(dto: CreateCityDto, countryId: number) {
    await this.countryService.findOneById(countryId);
    return await this.cityRepository.create({
      name: dto.name,
      countryId: countryId,
    });
  }

  async findAll() {
    return await this.cityRepository.findAll();
  }
}
