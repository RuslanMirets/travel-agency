import { TourComfort } from './tour-comfort.model';
import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Tour } from 'src/modules/tour/models/tour.model';

@Table({ tableName: 'Comfort' })
export class Comfort extends Model<Comfort> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsToMany(() => Tour, () => TourComfort)
  tour: Tour[];
}
