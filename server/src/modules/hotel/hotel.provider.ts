import { Hotel } from 'src/modules/hotel/models/hotel.model';
import { HOTEL_REPOSITORY } from './../../core/constants/index';

export const hotelProvider = [{ provide: HOTEL_REPOSITORY, useValue: Hotel }];
