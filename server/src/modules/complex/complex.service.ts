import { UpdateComplexDto } from './dto/update-complex.dto';
import { CreateComplexDto } from './dto/create-complex.dto';
import { Complex } from './models/complex.model';
import { COMPLEX_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ComplexService {
  constructor(@Inject(COMPLEX_REPOSITORY) private readonly complexRepository: typeof Complex) {}

  async create(dto: CreateComplexDto): Promise<Complex> {
    return await this.complexRepository.create<Complex>(dto);
  }

  async findAll() {
    return await this.complexRepository.findAll({ order: [['id', 'DESC']] });
  }

  async findOneById(id: number): Promise<Complex> {
    return await this.complexRepository.findOne<Complex>({ where: { id } });
  }

  async update(dto: UpdateComplexDto, complexId: number) {
    await this.complexRepository.update({ name: dto.name }, { where: { id: complexId } });
    return dto;
  }

  async delete(complexId: number) {
    return await this.complexRepository.destroy({ where: { id: complexId } });
  }

  async deleteAll() {
    return this.complexRepository.destroy({ where: {} });
  }
}
