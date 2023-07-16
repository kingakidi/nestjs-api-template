import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // check if the mail already exist
    const isEmail = await this.userService.findByEmail(createUserDto.email);

    createUserDto['roleId'] = 1;
    if (!isEmail) return this.userService.create(createUserDto);

    throw new BadRequestException('Email Already exist');
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // check if user exist

    const isUser = await this.userService.findOne(+id);

    if (!isUser) throw new BadRequestException('user id does not exist');

    if (Object.keys(updateUserDto).length < 1)
      throw new BadRequestException('empty body passed');

    const updateUser = await this.userService.update(+id, updateUserDto);

    if (updateUser) return this.userService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
