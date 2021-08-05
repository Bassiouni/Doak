interface ModuleConfig {
  imports?: any[];
  controllers: any[];
  providers: any[];
}

export function Module(config: ModuleConfig) {
  return (target: any) => {
    Reflect.set(target, 'config', config);
  }
}
