import { Routes } from './Controller.ts';
// deno-lint-ignore no-inferrable-types
export function Get(route: string = "/") {
  // deno-lint-ignore no-explicit-any
  return (target: any, propertyKey: PropertyKey, _descriptor: PropertyDescriptor) => {
    if (!Reflect.has(target, 'routes')) {
      Reflect.setPrototypeOf(target, { routes: [] as Routes[] })
    }

    Reflect.set(target, 'routes', [
      ...Reflect.get(target, 'routes'),
      {
        method: "GET",
        value: route,
        fn: target[propertyKey]
      }
    ])
  };
}