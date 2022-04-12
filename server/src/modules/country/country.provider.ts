import { Country } from './models/country.model';
import { COUNTRY_REPOSITORY } from 'src/core/constants';

export const countryProvider = [{ provide: COUNTRY_REPOSITORY, useValue: Country }];
