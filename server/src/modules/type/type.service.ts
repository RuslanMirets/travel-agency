import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './models/type.model';
import { TYPE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TypeService {
  constructor(@Inject(TYPE_REPOSITORY) private readonly typeRepository: typeof Type) {}

  async create(dto: CreateTypeDto, image: string): Promise<Type> {
    return await this.typeRepository.create<Type>({ ...dto, image });
  }

  async findAll() {
    return await this.typeRepository.findAll({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Type> {
    return await this.typeRepository.findOne<Type>({ where: { id } });
  }
}
