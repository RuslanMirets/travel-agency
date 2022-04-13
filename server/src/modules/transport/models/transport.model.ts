import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Tour } from 'src/modules/tour/models/tour.model';

@Table({ tableName: 'Transport' })
export class Transport extends Model<Transport> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Tour)
  tour: Tour;
}
