import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'Kind' })
export class Kind extends Model<Kind> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  value: string;

  @Column({ type: DataType.STRING(1000), allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;
}
