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
    const country = await this.countryService.findOneById(countryId);
    const city = await this.cityRepository.create({
      name: dto.name,
      countryId: countryId,
    });
    return { ...city['dataValues'], country };

    //Альтернативный способ
    // const city = await this.cityRepository.create(dto);
    // const country = await this.countryService.findOneById(countryId);
    // await city.$set('country', country.id);
    // const { ...result } = city['dataValues'];
    // return { ...result, country };
  }

  async findAll() {
    return await this.cityRepository.findAll({ include: { all: true } });
  }

  async findOneById(id: number): Promise<City> {
    return await this.cityRepository.findOne<City>({ where: { id } });
  }
}
