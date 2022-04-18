import { ComplexModule } from './../complex/complex.module';
import { hotelProvider } from './hotel.provider';
import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';

@Module({
  imports: [ComplexModule],
  providers: [HotelService, ...hotelProvider],
  controllers: [HotelController],
})
export class HotelModule {}
