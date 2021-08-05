import { Context, Application, ListenOptions, ApplicationOptions } from "../deps.ts";

export class Doak {
  private app: Application = new Application;

  public constructor(
    private config: {
      oakConfig?: ApplicationOptions<Record<string, any>>,
      module: any,
    } = { oakConfig: {}, module: {} }
  ) {
    this.app = new Application(this.config.oakConfig);
    this.app.use(async (ctx: Context, next: () => Promise<unknown>) => {
      await next();
      ctx.response.body = "Hello world";
    });
    this.init();
  }

  private init(): void {
    const { imports, controllers, providers } = Reflect.get(this.config.module, 'config');
    console.log({ imports, controllers, providers });
  }

  public async run(options: ListenOptions) {
    await this.app.listen(options);
  }

  public use(fn: any) {
    this.app.use(fn);
    return this;
  }

  public addEventListener(e: any, fn: any, options = {}) {
    this.app.addEventListener(e, fn, options)
  }
}
