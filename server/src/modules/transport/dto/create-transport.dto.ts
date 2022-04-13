import { MinLength } from 'class-validator';

export class CreateTransportDto {
  @MinLength(1, { message: 'Введите транспорт' })
  readonly name: string;
}
