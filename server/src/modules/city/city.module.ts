import { CountryModule } from './../country/country.module';
import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { cityProvider } from './city.provider';

@Module({
  imports: [CountryModule],
  providers: [CityService, ...cityProvider],
  controllers: [CityController],
  exports: [CityService],
})
export class CityModule {}
