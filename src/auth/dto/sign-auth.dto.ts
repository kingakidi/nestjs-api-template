import { ApiProperty } from '@nestjs/swagger';
import { IsString, isString } from 'class-validator';

export class signInDto {
  id: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
