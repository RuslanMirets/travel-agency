import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'Tour' })
export class Tour extends Model<Tour> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price: number;

  @Column({ type: DataType.STRING, allowNull: false })
  arrivalDates: string;

  @Column({ type: DataType.STRING, allowNull: false })
  durationDays: string;

  @Column({ type: DataType.STRING })
  tourIncludes: string;

  @Column({ type: DataType.STRING })
  additionalInfo: string;

  @Column({ type: DataType.STRING })
  additionalPayment: string;

  @Column({ type: DataType.JSONB })
  images: string[];

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  // @ForeignKey(() => TourType)
  // @Column({ type: DataType.INTEGER })
  // tourTypeId: number;

  // @ForeignKey(() => Hotel)
  // @Column({ type: DataType.INTEGER })
  // hotelId: number;

  // @ForeignKey(() => Transport)
  // @Column({ type: DataType.INTEGER })
  // transportId: number;
}
