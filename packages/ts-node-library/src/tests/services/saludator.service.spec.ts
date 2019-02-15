import { expect } from 'chai';
import 'mocha';
import ContainerProvider from "../../lib/platform/ioc.provider";
import "reflect-metadata";
import * as services from '../../lib/services';
import { Container } from 'typescript-ioc';


describe('Service with IoC/Dependency Injection', () => {
  it('should return hello world', () => {
    
    const consumerSaludatorService:services.ConsumerSaludatorService = Container.get(services.ConsumerSaludatorService);

    
    const result = consumerSaludatorService.sayHello("John");
    expect(result).to.equal('Hello John');
  });

});