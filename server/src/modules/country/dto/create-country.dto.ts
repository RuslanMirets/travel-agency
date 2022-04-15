import { Length, MinLength } from 'class-validator';

export class CreateCountryDto {
  @MinLength(1, { message: 'Введите страну' })
  readonly name: string;

  readonly abroad: boolean;

  @Length(1, 800, { message: 'Введите описание, максимум 800 символов' })
  description: string;
}
