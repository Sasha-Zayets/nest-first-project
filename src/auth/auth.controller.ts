import * as bcrypt from 'bcrypt';
import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { SignupDto } from './dto/signup.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  async login(@Body('user') user: SignupDto) {
    const { password, email } = user;
    return this.authService.login(email, password);
  }

  @Post('signup')
  async createUser(@Body('user') user: SignupDto) {
    const saltOrRounds = 10;
    const { password, email } = user;
    const resultSearch = await this.userService.findByUserEmail(email);

    if (resultSearch) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Your email is already use',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const hashedPassword: string = await bcrypt.hash(password, saltOrRounds);
    return await this.userService.createUser({
      email,
      password: hashedPassword,
    });
  }
}
