import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Country } from 'src/modules/country/models/country.model';

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
}
