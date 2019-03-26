import { fluentProvide } from "inversify-binding-decorators";

/**
 * Default IoC provider for Services
 * @param identifier 
 */
export const service = function(identifier) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done();
};

/**
 * Default IoC provider for Components
 * @param identifier 
 */
export const component = function(identifier) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done();
};

