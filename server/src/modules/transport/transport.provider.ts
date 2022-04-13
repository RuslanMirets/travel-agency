import { Transport } from './models/transport.model';
import { TRANSPORT_REPOSITORY } from './../../core/constants/index';

export const transportProvider = [{ provide: TRANSPORT_REPOSITORY, useValue: Transport }];
