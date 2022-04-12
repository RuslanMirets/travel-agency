import { MinLength } from 'class-validator';

export class CreateComplexDto {
  @MinLength(1, { message: 'Введите имущественный комплекс' })
  readonly name: string;
}
