import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Hotel as HotelModel } from 'src/modules/hotel/models/hotel.model';

export const Hotel = createParamDecorator((_: unknown, ctx: ExecutionContext): HotelModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.hotelId;
});
