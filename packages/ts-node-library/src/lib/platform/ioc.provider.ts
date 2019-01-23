import { Container } from 'inversify';
import * as dependencies from "../services";
import { autoProvide } from 'inversify-binding-decorators';

class ContainerProvider {
  static _instance: Container;
  static getInstance(): Container {
    try {
      if(!ContainerProvider._instance) {
        console.log('Initializing IoC Provider')
        ContainerProvider._instance = new Container({
          autoBindInjectable: true,
          defaultScope: "Singleton"
        });
        
        autoProvide(ContainerProvider._instance, dependencies);
        
        console.info('IoC provider initialized');
        console.debug('Dependencies loaded:' , Object.keys(dependencies));
      } 
      return ContainerProvider._instance;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default ContainerProvider;