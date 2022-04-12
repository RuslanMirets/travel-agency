import { Module } from '@nestjs/common';
import { ComplexService } from './complex.service';
import { ComplexController } from './complex.controller';
import { complexProvider } from './complex.provider';

@Module({
  providers: [ComplexService, ...complexProvider],
  controllers: [ComplexController],
})
export class ComplexModule {}
