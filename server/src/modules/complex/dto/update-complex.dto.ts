import { MinLength } from 'class-validator';

export class UpdateComplexDto {
  @MinLength(1, { message: 'Введите новое название строения' })
  readonly name: string;
}
