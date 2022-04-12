import { TOUR_REPOSITORY } from './../../core/constants/index';
import { Tour } from './models/tour.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TourService {
  constructor(@Inject(TOUR_REPOSITORY) private readonly tourRepository: typeof Tour) {}
}
