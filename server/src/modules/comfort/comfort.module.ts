import { Module } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { ComfortController } from './comfort.controller';
import { comfortProvider } from './comfort.provider';

@Module({
  providers: [ComfortService, ...comfortProvider],
  controllers: [ComfortController],
})
export class ComfortModule {}
