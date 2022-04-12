import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { tourProvider } from './tour.provider';

@Module({
  providers: [TourService, ...tourProvider],
  controllers: [TourController],
})
export class TourModule {}
