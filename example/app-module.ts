import { Module } from "../mod.ts";
import { AppController } from './app-controller.ts';
import { AppService } from './app-service.ts';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
