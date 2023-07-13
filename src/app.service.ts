import { Injectable } from '@nestjs/common';

interface userProfile {
  name: string;
  username: string;
  age?: number;
}
@Injectable()
export class AppService {
  getHello(): Array<userProfile> {
    return [
      {
        name: "Aka'aba Musa Akidi",
        username: 'kingakidi',
        age: 45,
      },
      {
        name: "Aka'aba Musa Akidi",
        username: 'kingakidi',
        age: 45,
      },
      {
        name: "Aka'aba Musa Akidi",
        username: 'kingakidi',
      },
      {
        name: "Aka'aba Musa Akidi",
        username: 'kingakidi',
        age: 45,
      },
    ];
  }
}
