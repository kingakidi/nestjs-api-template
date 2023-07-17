import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger/dist';
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  firstname: string;

  @ApiProperty()
  @IsString()
  lastname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiHideProperty()
  roleId: number;
}
