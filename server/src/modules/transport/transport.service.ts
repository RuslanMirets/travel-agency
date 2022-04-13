import { CreateTransportDto } from './dto/create-transport.dto';
import { Transport } from './models/transport.model';
import { TRANSPORT_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TransportService {
  constructor(
    @Inject(TRANSPORT_REPOSITORY) private readonly transportRepository: typeof Transport,
  ) {}

  async create(dto: CreateTransportDto): Promise<Transport> {
    return await this.transportRepository.create<Transport>(dto);
  }

  async findAll() {
    return await this.transportRepository.findAll({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Transport> {
    return await this.transportRepository.findOne<Transport>({ where: { id } });
  }
}
