import { Context, Application, ListenOptions, ApplicationOptions } from "../deps.ts";

export class Doak {
  private app: Application = new Application;

  public constructor(
    config: {
      oakConfig?: ApplicationOptions<Record<string, any>>,
      module: any,
    }
  ) {
    this.app = new Application(config.oakConfig);
    this.app.use(async (ctx: Context, next: () => Promise<unknown>) => {
      await next();
      ctx.response.body = "Hello world";
    })
  }

  
  public async run(options: ListenOptions) {
    // this.middlewares.map(m => this.app.use(m))
    await this.app.listen(options);
  }

  public use(fn: any) {
    this.app.use(fn);
    return this;
  }

  public addEventListener = this.app.addEventListener;
}
