import { Controller, Get } from "../mod.ts";
import { AppService } from './app-service.ts';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  getIndex() {
    return this.appService.sayHello();
  }
}
