import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  required: true;

  @IsString()
  password: string;
}
