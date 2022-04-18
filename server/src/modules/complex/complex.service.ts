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
    return await this.complexRepository.findAll();
  }
}
