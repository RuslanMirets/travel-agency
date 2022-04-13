import { HOTEL_REPOSITORY } from './../../core/constants/index';
import { Hotel } from './models/hotel.model';

export const hotelProvider = [{ provide: HOTEL_REPOSITORY, useValue: Hotel }];
