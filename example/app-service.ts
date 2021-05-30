import { Injectable } from '../mod.ts';

@Injectable()
export class AppService {
  public sayHello() {
    return "Hello World";
  }
}