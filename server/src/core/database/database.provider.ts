import { City } from './../../modules/city/models/city.model';
import { Country } from './../../modules/country/models/country.model';
import { Complex } from './../../modules/complex/models/complex.model';
import { Tour } from './../../modules/tour/models/tour.model';
import { UserRole } from './../../modules/role/models/user-role.model';
import { Role } from './../../modules/role/models/role.model';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Hotel } from 'src/modules/hotel/models/hotel.model';

export const databaseProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Role, UserRole, Tour, Complex, Country, City, Hotel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
