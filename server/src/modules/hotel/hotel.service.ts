import { ComplexService } from './../complex/complex.service';
import { CityService } from './../city/city.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { HOTEL_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { Hotel } from './models/hotel.model';

@Injectable()
export class HotelService {
  constructor(
    @Inject(HOTEL_REPOSITORY) private readonly hotelRepository: typeof Hotel,
    private readonly cityService: CityService,
    private readonly complexService: ComplexService,
  ) {}

  async create(dto: CreateHotelDto, cityId: number, complexId: number) {
    const city = await this.cityService.findOneById(cityId);
    const complex = await this.complexService.findOneById(complexId);
    const hotel = await this.hotelRepository.create({
      name: dto.name,
      location: dto.location,
      cityId: cityId,
      complexId: complexId,
    });
    return { ...hotel['dataValues'], city, complex };
  }

  async findAll() {
    return await this.hotelRepository.findAll({ include: { all: true } });
  }

  async findOneById(id: number): Promise<Hotel> {
    return await this.hotelRepository.findOne<Hotel>({ where: { id } });
  }
}
