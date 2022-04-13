import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Complex as ComplexModel } from 'src/modules/complex/models/complex.model';

export const Complex = createParamDecorator((_: unknown, ctx: ExecutionContext): ComplexModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.complexId;
});
