import { Complex } from './models/complex.model';
import { COMPLEX_REPOSITORY } from './../../core/constants/index';

export const complexProvider = [{ provide: COMPLEX_REPOSITORY, useValue: Complex }];
