import { MinLength } from 'class-validator';

export class CreateContinentDto {
  @MinLength(1, { message: 'Введите название континента' })
  readonly name: string;
}
