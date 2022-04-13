import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Continent as ContinentModel } from 'src/modules/continent/models/continent.model';

export const Continent = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): ContinentModel => {
    const request = ctx.switchToHttp().getRequest();
    return request.body.continentId;
  },
);
