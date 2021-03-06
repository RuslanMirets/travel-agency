import { CountryService } from './../country/country.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './models/city.model';
import { CITY_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import slugify from 'slugify';

@Injectable()
export class CityService {
  constructor(
    @Inject(CITY_REPOSITORY) private readonly cityRepository: typeof City,
    private readonly countryService: CountryService,
  ) {}

  async create(dto: CreateCityDto, countryId: number, image: string) {
    const country = await this.countryService.findOneById(countryId);
    const slug = slugify(dto.name, { lower: true });
    const city = await this.cityRepository.create({
      name: dto.name,
      countryId: countryId,
      slug: slug,
      image: image,
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

  async findAllRussia() {
    return await this.cityRepository.findAll({ where: { countryId: 1 } });
  }
}
