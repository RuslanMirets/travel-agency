import { Tour } from './../../tour/models/tour.model';
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';

@Table({ tableName: 'Type' })
export class Type extends Model<Type> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING(1500), allowNull: false })
  description: string;

  @Column({ type: DataType.STRING(), allowNull: false })
  image: string;

  @HasMany(() => Tour)
  tour: Tour;
}
