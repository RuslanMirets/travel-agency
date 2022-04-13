import { Continent } from './../../continent/models/continent.model';
import { City } from './../../city/models/city.model';
import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'Country' })
export class Country extends Model<Country> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => City)
  city: City;

  @ForeignKey(() => Continent)
  @Column({ type: DataType.INTEGER, allowNull: false })
  continentId: number;

  @BelongsTo(() => Continent)
  continent: Continent;
}
