import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateRoleDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  permissions: string;
}
