import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  /////////////////
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  ///////////////////////
  async Signup(AutDTO: CreateAuthDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: AutDTO.email },
    });

    if (existingUser) {
      return 'User already exists';
    } else {
      try {
        const hash = await bcrypt.hash(AutDTO.Password, 10);
        const newUser = this.userRepository.create({
          email: AutDTO.email,
          Password: hash,
          phone: AutDTO.phone,
        });
        const data = await this.userRepository.save(newUser);
        console.log(data, 'the datas');
        return data;
      } catch (error) {
        console.error('Error hashing password:', error);
        return 'Error creating user';
      }
    }
  }
  ////////////////////////
  async Login(AutDTO: CreateAuthDto) {
    const data = await this.userRepository.findOne({
      where: { email: AutDTO.email },
    });
    if (!data) {
      return 'no user found ';
    }
    const isMatch = await bcrypt.compare(AutDTO.Password, data.Password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { id: data.id, email: data.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
