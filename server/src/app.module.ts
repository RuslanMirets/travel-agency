import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { ComplexModule } from './modules/complex/complex.module';
import { HotelModule } from './modules/hotel/hotel.module';
import { KindModule } from './modules/kind/kind.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
    RoleModule,
    ComplexModule,
    HotelModule,
    KindModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
