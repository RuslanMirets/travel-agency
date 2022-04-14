import { MinLength } from 'class-validator';

export class CreateHotelDto {
  @MinLength(1, { message: 'Введите название отеля' })
  readonly name: string;

  @MinLength(1, { message: 'Введите расположение' })
  readonly location: string;
}
