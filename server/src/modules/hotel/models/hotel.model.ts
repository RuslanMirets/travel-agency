import { Complex } from './../../complex/models/complex.model';
import { City } from './../../city/models/city.model';
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'Hotel' })
export class Hotel extends Model<Hotel> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @ForeignKey(() => City)
  @Column({ type: DataType.INTEGER, allowNull: false })
  cityId: number;

  @BelongsTo(() => City)
  city: City;

  @ForeignKey(() => Complex)
  @Column({ type: DataType.INTEGER, allowNull: false })
  complexId: number;

  @BelongsTo(() => Complex)
  complex: Complex;
}
