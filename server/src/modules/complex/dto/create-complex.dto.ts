import { MinLength } from 'class-validator';

export class CreateComplexDto {
  @MinLength(1, { message: 'Введите название строения' })
  readonly name: string;
}
