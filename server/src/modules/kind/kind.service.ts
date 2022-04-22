import { UpdateKindDto } from './dto/update-kind.dto';
import { CreateKindDto } from './dto/create-kind.dto';
import { Kind } from './models/kind.model';
import { KIND_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import slugify from 'slugify';

@Injectable()
export class KindService {
  constructor(@Inject(KIND_REPOSITORY) private readonly kindRepository: typeof Kind) {}

  async create(dto: CreateKindDto): Promise<Kind> {
    const slug = slugify(dto.value, { lower: true });
    return await this.kindRepository.create<Kind>({ ...dto, slug });
  }

  async findAll() {
    return await this.kindRepository.findAll({ include: { all: true } });
  }

  async update(dto: UpdateKindDto, kindId: number) {
    const slug = slugify(dto.value, { lower: true });
    await this.kindRepository.update(
      { value: dto.value, description: dto.description, slug: slug },
      { where: { id: kindId } },
    );
    return dto;
  }

  async delete(kindId: number) {
    return await this.kindRepository.destroy({ where: { id: kindId } });
  }

  async deleteAll() {
    return await this.kindRepository.destroy({ where: {} });
  }
}
