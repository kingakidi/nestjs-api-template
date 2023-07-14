import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray } from 'class-validator';
export class CreateRoleDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsArray()
  permissions: string;
}
