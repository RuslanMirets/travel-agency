import { ICountry } from './country';

export interface ICity {
  id: number;
  name: string;
  countryId: number;
  country: ICountry;
  slug: string;
  image: string;
}
