import { Country } from './models/country.model';
import { COUNTRY_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { ContinentService } from '../continent/continent.service';

@Injectable()
export class CountryService {
  constructor(
    @Inject(COUNTRY_REPOSITORY) private readonly countryRepository: typeof Country,
    private readonly continentService: ContinentService,
  ) {}

  async create(dto: CreateCountryDto, continentId: number): Promise<Country> {
    const continent = await this.continentService.findOneById(continentId);
    const country = await this.countryRepository.create({
      name: dto.name,
      continentId: continentId,
    });
    return { ...country['dataValues'], continent };
  }

  async findAll() {
    return await this.countryRepository.findAll({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Country> {
    return await this.countryRepository.findOne<Country>({ where: { id } });
  }
}
