import AbstractService from "app/platform/services/AbstractService";
import { service } from "app/platform/ioc/decorators";
import DemoSaludator from "app/platform/demo/DemoSaludator";

@service(DemoService)
class DemoService extends AbstractService {
  private demoSaludator: DemoSaludator;

  public constructor(demoSaludator: DemoSaludator) {
    super();
    this.demoSaludator = demoSaludator;
  }
  public hello(name: string) {
    this.logger.info("Calling demo service implementation");
    return this.demoSaludator.greet(`${name} test name`);
  }
}

export default DemoService;
