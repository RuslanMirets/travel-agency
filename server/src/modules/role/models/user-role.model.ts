import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';
import { Role } from './role.model';

@Table({ tableName: 'UserRole', createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;
}