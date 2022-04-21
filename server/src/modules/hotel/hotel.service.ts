import { UpdateHotelDto } from './dto/update-hotel.dto';
import { ComplexService } from './../complex/complex.service';
import { Hotel } from 'src/modules/hotel/models/hotel.model';
import { HOTEL_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @Inject(HOTEL_REPOSITORY) private readonly hotelRepository: typeof Hotel,
    private readonly complexService: ComplexService,
  ) {}

  async create(dto: CreateHotelDto, complexId: number, image: string): Promise<Hotel> {
    const complex = await this.complexService.findOneById(complexId);
    const newHotel = await this.hotelRepository.create<Hotel>({
      ...dto,
      complexId: complexId,
      image: image,
    });
    return { ...newHotel['dataValues'], complex };
  }

  async findAll() {
    return await this.hotelRepository.findAll({ include: { all: true } });
  }

  async findOneById(hotelId: number) {
    return await this.hotelRepository.findOne({ where: { id: hotelId }, include: { all: true } });
  }

  async update(dto: UpdateHotelDto, hotelId: number) {
    await this.hotelRepository.update({ name: dto.name }, { where: { id: hotelId } });
    return dto;
  }

  async delete(hotelId: number) {
    return await this.hotelRepository.destroy({ where: { id: hotelId } });
  }

  async deleteAll() {
    return this.hotelRepository.destroy({ where: {} });
  }
}
