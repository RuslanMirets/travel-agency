import { TourService } from './tour.service';
import { Controller } from '@nestjs/common';

@Controller('tour')
export class TourController {
  constructor(private tourService: TourService) {}
}
