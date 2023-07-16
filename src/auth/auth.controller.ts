import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { SignInAuthDto } from './dto/sign-auth.dto';
import { UserService } from 'src/user/user.service';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';

@ApiTags()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async create(@Body() signInAuthDto: SignInAuthDto) {
    // check if the user exist

    const user = await this.userService.findByEmail(signInAuthDto.email);

    if (!user)
      throw new BadRequestException(
        `user with ${signInAuthDto.email} does not exist`,
      );

    // call for signin services

    if (user.password !== signInAuthDto.password)
      throw new BadRequestException(`invalid password provided `);

    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
