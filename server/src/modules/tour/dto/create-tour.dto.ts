import { MinLength } from 'class-validator';

export class CreateTourDto {
  @MinLength(1, { message: 'Введите цену' })
  readonly price: number;

  @MinLength(1, { message: 'Введите даты заездов' })
  readonly arrivalDates: string;

  @MinLength(1, { message: 'Введите продолжительность дней' })
  readonly durationDays: string;

  @MinLength(1, { message: 'Введите, что включено в стоимость тура' })
  readonly tourIncludes: string;

  @MinLength(1, { message: 'Введите дополнительную информацию' })
  readonly additionalInfo: string;

  @MinLength(1, { message: 'Введите дополнительные расходы' })
  readonly additionalPayment: string;

  readonly images: string[];

  @MinLength(1, { message: 'Введите описание' })
  readonly description: string;
}
