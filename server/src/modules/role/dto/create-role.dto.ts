import { MinLength } from 'class-validator';

export class CreateRoleDto {
  @MinLength(1, { message: 'Введите значение' })
  readonly value: string;

  @MinLength(1, { message: 'Введите описание' })
  readonly description: string;
}
