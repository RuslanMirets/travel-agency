import { Module } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { ComfortController } from './comfort.controller';

@Module({
  providers: [ComfortService],
  controllers: [ComfortController]
})
export class ComfortModule {}
