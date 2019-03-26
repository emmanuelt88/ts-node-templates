import { component } from "app/domains/platform/ioc/decorators";

@component(DemoSaludator)
class DemoSaludator {
  greet(greeting: string) {
      return "Hello, " + greeting;
  }
}

export default DemoSaludator;