import { IsString, isString } from 'class-validator';

export class SignInAuthDto {
  id: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
