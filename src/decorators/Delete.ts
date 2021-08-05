import { Routes } from './Controller.ts';
// deno-lint-ignore no-inferrable-types
export function Delete(route: string = "/") {
  // deno-lint-ignore no-explicit-any
  return (target: any, propertyKey: PropertyKey, _descriptor: PropertyDescriptor) => {
    if (!Reflect.has(target, 'meta:routes')) {
      Reflect.setPrototypeOf(target, { routes: [] as Routes[] })
    }

    Reflect.set(target, 'meta:routes', [
      ...Reflect.get(target, 'meta:routes'),
      {
        method: "DELETE",
        value: route,
        fn: target[propertyKey]
      }
    ])
  };
}