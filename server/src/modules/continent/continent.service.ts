import { CreateContinentDto } from './dto/create-continent.dto';
import { Continent } from './models/continent.model';
import { CONTINENT_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ContinentService {
  constructor(
    @Inject(CONTINENT_REPOSITORY) private readonly continentRepository: typeof Continent,
  ) {}

  async create(dto: CreateContinentDto): Promise<Continent> {
    return await this.continentRepository.create<Continent>(dto);
  }

  async findAll() {
    return await this.continentRepository.findAll({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Continent> {
    return await this.continentRepository.findOne<Continent>({ where: { id } });
  }
}
