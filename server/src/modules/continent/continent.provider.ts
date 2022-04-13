import { Continent } from './models/continent.model';
import { CONTINENT_REPOSITORY } from './../../core/constants/index';

export const continentProvider = [{ provide: CONTINENT_REPOSITORY, useValue: Continent }];
