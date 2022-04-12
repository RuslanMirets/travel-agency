import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { TourModule } from './modules/tour/tour.module';
import { TypeModule } from './modules/type/type.module';
import { HotelModule } from './modules/hotel/hotel.module';
import { CityModule } from './modules/city/city.module';
import { TransportModule } from './modules/transport/transport.module';
import { ComplexModule } from './modules/complex/complex.module';
import { CountryModule } from './modules/country/country.module';
import { ComfortModule } from './modules/comfort/comfort.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
    RoleModule,
    TourModule,
    TypeModule,
    HotelModule,
    CityModule,
    TransportModule,
    ComplexModule,
    CountryModule,
    ComfortModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
