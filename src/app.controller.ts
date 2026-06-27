import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { CreateAuthDto } from './auth/dto/create-auth.dto';
import { AuthService } from './auth/auth.service';
export class CreateCatDto {
  userId: number;
  name: string;
  age: number;
}
export interface Cat {
  name: string;
  age: number;
  breed: string;
}
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}
  @Get('/findAll')
  @HttpCode(201)
  @Header('Cash', '100')
  @Redirect('http://docs.nestjs.com', 301)
  getString(): string {
    return 'Return docs.nestjs.com';
  }
  @Get('/find')
  findAll(@Query('version') version: string): string {
    console.log(version);
    return `This is a query for version: ${version}`;
  }
  @Post('/find')
  findAllPost(@Body() createcatdto: CreateCatDto): string {
    console.log(createcatdto);
    return `This is a post for body: ${JSON.stringify(createcatdto)}`;
  }
  @Post('/create')
  create(@Body() createcatdto: Cat): string {
    this.appService.create(createcatdto);
    return `This is a post for body: ${JSON.stringify(createcatdto)}`;
  }
  @Get()
  findAllCats() {
    return this.appService.findAllCats();
  }
  @Get('/port')
  getAddPort() {
    const port = this.configService.get<number>('PORT');
    return `Server is running on port: ${port}`;
  }
  
}
