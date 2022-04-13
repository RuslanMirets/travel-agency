import { Comfort } from './models/comfort.model';
import { COMFORT_REPOSITORY } from 'src/core/constants';

export const comfortProvider = [{ provide: COMFORT_REPOSITORY, useValue: Comfort }];
