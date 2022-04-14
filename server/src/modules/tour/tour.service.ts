import { CreateTourDto } from './dto/create-tour.dto';
import { ComfortService } from './../comfort/comfort.service';
import { TransportService } from './../transport/transport.service';
import { HotelService } from './../hotel/hotel.service';
import { TypeService } from './../type/type.service';
import { TOUR_REPOSITORY } from './../../core/constants/index';
import { Tour } from './models/tour.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TourService {
  constructor(
    @Inject(TOUR_REPOSITORY) private readonly tourRepository: typeof Tour,
    private readonly typeService: TypeService,
    private readonly hotelService: HotelService,
    private readonly transportService: TransportService,
    private readonly comfortService: ComfortService,
  ) {}

  async create(
    dto: CreateTourDto,
    typeId: number,
    hotelId: number,
    transportId: number,
    comfortId: number,
  ) {
    const type = await this.typeService.findOneById(typeId);
    const hotel = await this.hotelService.findOneById(hotelId);
    const transport = await this.transportService.findOneById(transportId);

    const tour = await this.tourRepository.create({
      price: dto.price,
      arrivalDates: dto.arrivalDates,
      durationDays: dto.durationDays,
      tourIncludes: dto.tourIncludes,
      additionalInfo: dto.additionalInfo,
      additionalPayment: dto.additionalPayment,
      images: dto.images,
      description: dto.description,
      typeId: typeId,
      hotelId: hotelId,
      transportId: transportId,
    });

    const comfort = await this.comfortService.findAllById(comfortId);
    await tour.$set(
      'comfort',
      comfort.filter((item) => item.id),
    );

    return { ...tour['dataValues'], type, hotel, transport, comfort };
  }

  async findAll() {
    return await this.tourRepository.findAll({ include: { all: true } });
  }

  async findAllByType(typeId: number) {
    return await this.tourRepository.findAll({ where: { typeId } });
  }
}
