import { ComfortModule } from './../comfort/comfort.module';
import { TransportModule } from './../transport/transport.module';
import { HotelModule } from './../hotel/hotel.module';
import { TypeModule } from './../type/type.module';
import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { tourProvider } from './tour.provider';

@Module({
  imports: [TypeModule, HotelModule, TransportModule, ComfortModule],
  providers: [TourService, ...tourProvider],
  controllers: [TourController],
})
export class TourModule {}
