import { COMPLEX_REPOSITORY } from './../../core/constants/index';
import { Complex } from './models/complex.model';

export const complexProvider = [{ provide: COMPLEX_REPOSITORY, useValue: Complex }];
