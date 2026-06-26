import { Injectable } from '@nestjs/common';
import { Cat } from './app.controller';

@Injectable()
export class AppService {
  private readonly cats: Cat[] = [];
  constructor() {}
  getHello(): string {
    return 'Hello World!';
  }
  create(cat: Cat): string {
    this.cats.push(cat);
    console.log(cat);
    return 'Cat created successfully!';
  }
  findAllCats() {
    return this.cats;
  }
}
