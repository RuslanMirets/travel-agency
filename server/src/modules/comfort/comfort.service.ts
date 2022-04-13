import { CreateComfortDto } from './dto/create-comfort.dto';
import { Comfort } from './models/comfort.model';
import { COMFORT_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ComfortService {
  constructor(@Inject(COMFORT_REPOSITORY) private readonly comfortRepository: typeof Comfort) {}

  async create(dto: CreateComfortDto): Promise<Comfort> {
    return await this.comfortRepository.create<Comfort>(dto);
  }

  async findAll() {
    return await this.comfortRepository.findAll({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Comfort> {
    return await this.comfortRepository.findOne<Comfort>({ where: { id } });
  }

  async findAllById(id: number) {
    return await this.comfortRepository.findAll({ where: { id } });
  }
}
