import { ContinentModule } from './../continent/continent.module';
import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { countryProvider } from './country.provider';

@Module({
  imports: [ContinentModule],
  providers: [CountryService, ...countryProvider],
  controllers: [CountryController],
  exports: [CountryService],
})
export class CountryModule {}
