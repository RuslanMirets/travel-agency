import { ComplexService } from './complex.service';
import { Controller } from '@nestjs/common';

@Controller('complex')
export class ComplexController {
  constructor(private complexService: ComplexService) {}
}
