import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Country } from 'src/modules/country/models/country.model';
import { Hotel } from 'src/modules/hotel/models/hotel.model';

@Table({ tableName: 'City' })
export class City extends Model<City> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER, allowNull: false })
  countryId: number;

  @BelongsTo(() => Country)
  country: Country;

  @HasMany(() => Hotel)
  hotel: Hotel;

  @Column({ type: DataType.STRING, allowNull: false })
  slug: string;
}
