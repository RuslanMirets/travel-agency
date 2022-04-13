import { Type } from './models/type.model';
import { TYPE_REPOSITORY } from './../../core/constants/index';

export const typeProvider = [{ provide: TYPE_REPOSITORY, useValue: Type }];
