import { MinLength } from 'class-validator';

export class CreateCountryDto {
  @MinLength(1, { message: 'Введите страну' })
  readonly name: string;

  readonly abroad: boolean;
}
