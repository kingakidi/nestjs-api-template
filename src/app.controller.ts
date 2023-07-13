import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface userProfile {
  name: string;
  username: string;
  age?: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Array<userProfile> {
    return this.appService.getHello();
  }
}
