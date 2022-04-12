import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Country' })
export class Country extends Model<Country> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
