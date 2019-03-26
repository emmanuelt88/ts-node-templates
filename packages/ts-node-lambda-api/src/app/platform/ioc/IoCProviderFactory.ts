import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";

/**
 * Factory of dependencies container using inversify
 * https://github.com/inversify/inversify-binding-decorators
 */
class IoCProviderFactory  {
  private static singleton: IoCProviderFactory;
  private container: Container;

  private constructor() {
  }

  public static getInstance():IoCProviderFactory{
    if(!IoCProviderFactory.singleton) {
      IoCProviderFactory.singleton = new IoCProviderFactory();
    }
    return IoCProviderFactory.singleton;
  }

  public initialize():void {
    this.container = new Container();
    this.container.load(buildProviderModule());
  }
}

export default IoCProviderFactory;