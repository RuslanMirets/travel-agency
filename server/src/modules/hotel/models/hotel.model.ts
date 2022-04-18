import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Complex } from 'src/modules/complex/models/complex.model';

@Table({ tableName: 'Hotel' })
export class Hotel extends Model<Hotel> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  image: string;

  @Column({ type: DataType.STRING, allowNull: false })
  location: string;

  @ForeignKey(() => Complex)
  @Column({ type: DataType.INTEGER, allowNull: false })
  complexId: number;

  @BelongsTo(() => Complex)
  complex: Complex;
}
