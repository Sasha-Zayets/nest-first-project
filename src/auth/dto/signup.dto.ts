import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class SignupDto {
  @IsEmail({
    message: 'Email is not correct',
  })
  email: string;

  @IsNotEmpty()
  @MinLength(6, {
    message: 'Password is too short',
  })
  password: string;
}
