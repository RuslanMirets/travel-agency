import { Module } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { ContinentController } from './continent.controller';
import { continentProvider } from './continent.provider';

@Module({
  providers: [ContinentService, ...continentProvider],
  controllers: [ContinentController],
  exports: [ContinentService],
})
export class ContinentModule {}
