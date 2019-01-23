import { Container } from 'inversify';
import { expect } from 'chai';
import 'mocha';
import ContainerProvider from "../../lib/platform/ioc.provider";
import "reflect-metadata";
import * as services from '../../lib/services';

let container: Container;

try {
  container = ContainerProvider.getInstance();
  container = ContainerProvider.getInstance();
  container = ContainerProvider.getInstance();
} catch (error) {
  console.error(error);
}
describe('Service with IoC/Dependency Injection', () => {
  it('should return hello world', () => {
    const consumerSaludatorService = container.get(services.ConsumerSaludatorService);
    const result = consumerSaludatorService.sayHello("John");
    expect(result).to.equal('Hello John');
  });

});