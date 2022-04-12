import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'Hotel' })
export class Hotel extends Model<Hotel> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  // @ForeignKey(() => City)
  // @Column({ type: DataType.INTEGER })
  // cityId: number;

  // @ForeignKey(() => Complex)
  // @Column({ type: DataType.INTEGER })
  // complexId: number;
}
