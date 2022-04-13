import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Transport as TransportModel } from 'src/modules/transport/models/transport.model';

export const Transport = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): TransportModel => {
    const request = ctx.switchToHttp().getRequest();
    return request.body.transportId;
  },
);
