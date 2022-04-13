import { Module } from '@nestjs/common';
import { TransportService } from './transport.service';
import { TransportController } from './transport.controller';
import { transportProvider } from './transport.provider';

@Module({
  providers: [TransportService, ...transportProvider],
  controllers: [TransportController],
  exports: [TransportService],
})
export class TransportModule {}
