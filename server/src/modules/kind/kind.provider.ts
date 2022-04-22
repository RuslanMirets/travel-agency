import { Kind } from './models/kind.model';
import { KIND_REPOSITORY } from './../../core/constants/index';

export const kindProvider = [{ provide: KIND_REPOSITORY, useValue: Kind }];
