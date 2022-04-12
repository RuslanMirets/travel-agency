import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'TourType' })
export class TourType extends Model<TourType> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
