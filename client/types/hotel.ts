import { IComplex } from './complex';

export interface IHotel {
  id: number;
  name: string;
  location: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  complexId: number;
  complex: IComplex;
  [key: string]: any;
}
