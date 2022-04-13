import { MinLength } from 'class-validator';

export class CreateComfortDto {
  @MinLength(1, { message: 'Введите удобство' })
  readonly name: string;
}
