import { Doak } from '../mod.ts';
import { AppModule } from "./app-module.ts";

const app = new Doak({ module: AppModule });

app.addEventListener('listen', (e) => {
  console.log(`listening..http://${e.hostname}:${e.port}/`)
})

await app.run({ port: 3000, hostname: '0.0.0.0' });