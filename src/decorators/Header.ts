export function Header(name: string, value: string) {
  return (target: any, propertyKey: PropertyKey, _descriptor: PropertyDescriptor) => {
    if (!Reflect.has(target, 'routes')) {
      Reflect.setPrototypeOf(target, { routes: [] })
    }

    Reflect.set(target, 'routes', [
      ...Reflect.get(target, 'routes'),
      {
        method: "GET",
        value: Reflect.get(target, 'routes')[target['routes']],
        fn: target[propertyKey]
      }
    ])
  }
}