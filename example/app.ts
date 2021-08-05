import { Doak } from '../mod.ts';
import { AppModule } from "./app-module.ts";

const app = new Doak({ module: AppModule, oakConfig: {} });

app.addEventListener('listen', (e: any) => {
  console.log(`listening..http://${e.hostname || "localhost"}:${e.port}/`)
});

await app.run({ port: 3000, hostname: '0.0.0.0' });