import { TourComfort } from './../../comfort/models/tour-comfort.model';
import { Comfort } from './../../comfort/models/comfort.model';
import { Type } from './../../type/models/type.model';
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Hotel } from 'src/modules/hotel/models/hotel.model';
import { Transport } from 'src/modules/transport/models/transport.model';

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

  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  typeId: number;

  @BelongsTo(() => Type)
  type: Type;

  @ForeignKey(() => Hotel)
  @Column({ type: DataType.INTEGER })
  hotelId: number;

  @BelongsTo(() => Hotel)
  hotel: Hotel;

  @ForeignKey(() => Transport)
  @Column({ type: DataType.INTEGER })
  transportId: number;

  @BelongsTo(() => Transport)
  transport: Transport;

  @BelongsToMany(() => Comfort, () => TourComfort)
  comfort: Comfort[];
}
