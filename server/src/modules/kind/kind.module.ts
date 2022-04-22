import { kindProvider } from './kind.provider';
import { Module } from '@nestjs/common';
import { KindService } from './kind.service';
import { KindController } from './kind.controller';

@Module({
  providers: [KindService, ...kindProvider],
  controllers: [KindController],
})
export class KindModule {}
