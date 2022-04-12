import { City } from './models/city.model';
import { CITY_REPOSITORY } from './../../core/constants/index';

export const cityProvider = [{ provide: CITY_REPOSITORY, useValue: City }];
