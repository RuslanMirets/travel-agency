import { MinLength } from 'class-validator';

export class CreateTypeDto {
  @MinLength(1, { message: 'Введите название типа' })
  readonly name: string;

  @MinLength(1, { message: 'Введите описание типа' })
  readonly description: string;
}
