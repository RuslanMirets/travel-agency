import { City } from './../../city/models/city.model';
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';

@Table({ tableName: 'Country' })
export class Country extends Model<Country> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => City)
  city: City;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  abroad: boolean;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  image: string;

  @Column({ type: DataType.STRING(800), allowNull: false })
  description: string;
}
