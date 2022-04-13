import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Comfort as ComfortModel } from 'src/modules/comfort/models/comfort.model';

export const Comfort = createParamDecorator((_: unknown, ctx: ExecutionContext): ComfortModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.comfortId;
});
