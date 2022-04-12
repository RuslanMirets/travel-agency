import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { countryProvider } from './country.provider';

@Module({
  providers: [CountryService, ...countryProvider],
  controllers: [CountryController],
  exports: [CountryService],
})
export class CountryModule {}
