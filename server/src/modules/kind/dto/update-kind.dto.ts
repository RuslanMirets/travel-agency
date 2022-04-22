import { Length, MinLength } from 'class-validator';

export class UpdateKindDto {
  @MinLength(1, { message: 'Введите значение' })
  readonly value: string;

  @Length(1, 1000, { message: 'Введите описание, максимум 1000 символов' })
  description: string;
}
