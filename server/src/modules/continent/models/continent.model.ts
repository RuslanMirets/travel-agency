import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Country } from 'src/modules/country/models/country.model';

@Table({ tableName: 'Continent' })
export class Continent extends Model<Continent> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Country)
  country: Country;
}
