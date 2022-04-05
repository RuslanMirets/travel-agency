import { LocalAuthGuard } from './../../core/guards/local-auth.guard';
import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { DoesUserExist } from 'src/core/guards/doesUserExist.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    return await this.authService.register(dto);
  }
}
