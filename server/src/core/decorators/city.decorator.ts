import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { City as CityModel } from 'src/modules/city/models/city.model';

export const City = createParamDecorator((_: unknown, ctx: ExecutionContext): CityModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.cityId;
});
