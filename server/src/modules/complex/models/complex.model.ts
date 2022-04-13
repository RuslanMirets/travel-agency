import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Hotel } from 'src/modules/hotel/models/hotel.model';

@Table({ tableName: 'Complex' })
export class Complex extends Model<Complex> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Hotel)
  hotel: Hotel;
}
