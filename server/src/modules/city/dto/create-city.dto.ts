import { MinLength } from 'class-validator';

export class CreateCityDto {
  @MinLength(1, { message: 'Введите город' })
  readonly name: string;
}
