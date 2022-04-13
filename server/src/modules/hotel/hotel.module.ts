import { ComplexModule } from './../complex/complex.module';
import { CityModule } from './../city/city.module';
import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { hotelProvider } from './hotel.provider';

@Module({
  imports: [CityModule, ComplexModule],
  providers: [HotelService, ...hotelProvider],
  controllers: [HotelController],
  exports: [HotelService],
})
export class HotelModule {}
