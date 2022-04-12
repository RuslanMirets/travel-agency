import { Facilities } from './facilities.model';
import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Tour } from './tour.model';

@Table({ tableName: 'TourFacilities', createdAt: false, updatedAt: false })
export class TourFacilities extends Model<TourFacilities> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Tour)
  @Column({ type: DataType.INTEGER })
  tourId: number;

  @ForeignKey(() => Facilities)
  @Column({ type: DataType.INTEGER })
  facilitiesId: number;
}
