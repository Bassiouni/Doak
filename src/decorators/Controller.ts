export interface Routes {
  method: string,
  // deno-lint-ignore ban-types
  fn: Function,
  value: string,
  header: any
}

export interface Metadata {
  prefix: string,
  routes: Routes[]
}

// deno-lint-ignore no-inferrable-types
export function Controller(prefix: string = '/') {
  // deno-lint-ignore no-explicit-any ban-types
  return <T extends { new(...args: any[]): {} }>(target: T): T => {
    return class extends target {
      private metadata: Metadata = {
        prefix,
        routes: Reflect.get(this, 'routes'),
      };
    }
  };
}