import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // これで@Getデコレータの引数に文字列を入れるとルーティングが設定できる。
  @Get('goodBye')
  getGoodBye(): string {
    return this.appService.getGoodBye();
  }
}
