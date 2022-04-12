import { COMPLEX_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { Complex } from './models/complex.model';

@Injectable()
export class ComplexService {
  constructor(@Inject(COMPLEX_REPOSITORY) private readonly complexRepository: typeof Complex) {}
}
