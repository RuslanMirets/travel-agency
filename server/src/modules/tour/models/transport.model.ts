import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Transport' })
export class Transport extends Model<Transport> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
