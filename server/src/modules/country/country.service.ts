import { Country } from './models/country.model';
import { COUNTRY_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { Op } from 'sequelize';
import slugify from 'slugify';

@Injectable()
export class CountryService {
  constructor(@Inject(COUNTRY_REPOSITORY) private readonly countryRepository: typeof Country) {}

  async create(dto: CreateCountryDto, image: string): Promise<Country> {
    const slug = slugify(dto.name, { lower: true });
    return await this.countryRepository.create<Country>({ ...dto, slug, image });
  }

  async findAll() {
    return await this.countryRepository.findAll({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Country> {
    return await this.countryRepository.findOne<Country>({ where: { id } });
  }

  async findAllRussia() {
    return await this.countryRepository.findAll({ where: { abroad: false } });
  }

  async findAllAbroad() {
    // return await this.countryRepository.findAll({ where: { continentId: { [Op.not]: 1 } } });
    return await this.countryRepository.findAll({ where: { abroad: true } });
  }
}
