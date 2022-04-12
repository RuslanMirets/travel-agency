import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Country as CountryModel } from 'src/modules/country/models/country.model';

export const Country = createParamDecorator((_: unknown, ctx: ExecutionContext): CountryModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.countryId;
});
