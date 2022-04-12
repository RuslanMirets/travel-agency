import { Tour } from './models/tour.model';
import { TOUR_REPOSITORY } from './../../core/constants/index';

export const tourProvider = [{ provide: TOUR_REPOSITORY, useValue: Tour }];
