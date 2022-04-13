import { MinLength } from 'class-validator';

export class CreateTypeDto {
  @MinLength(1, { message: 'Введите тип' })
  readonly name: string;
}
