import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post('login')
  Login(@Body() createUserDto: CreateAuthDto) {
    
    return this.AuthService.Login(createUserDto);
  }
  @Post('signup')
  Signup(@Body() createUserDto: CreateAuthDto) {
    return this.AuthService.Signup(createUserDto);
  }
}
