import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Tour } from './../../tour/models/tour.model';
import { Comfort } from './comfort.model';

@Table({ tableName: 'TourComfort', createdAt: false, updatedAt: false })
export class TourComfort extends Model<TourComfort> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Tour)
  @Column({ type: DataType.INTEGER })
  tourId: number;

  @ForeignKey(() => Comfort)
  @Column({ type: DataType.INTEGER })
  comfortId: number;
}
