import { fluentProvide } from "inversify-binding-decorators";

/**
 * Default IoC provider for Services
 * @param identifier 
 */
export const service = function(identifier: any) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done();
};

/**
 * Default IoC provider for Components
 * @param identifier 
 */
export const component = function(identifier: any) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done();
};

/**
 * Default IoC provider for Repositories
 * @param identifier 
 */
export const repository = function(identifier: any) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done();
};


