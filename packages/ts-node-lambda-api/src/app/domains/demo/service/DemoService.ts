import { service } from "app/domains/platform/ioc/decorators";
import DemoSaludator from "app/domains/platform/demo/DemoSaludator";
import AbstractService from "app/domains/platform/service/AbstractService";

/**
 * Demo service example implementation
 */
@service(DemoService)
class DemoService extends AbstractService {
  private demoSaludator: DemoSaludator;

  public constructor(demoSaludator: DemoSaludator) {
    super();
    this.demoSaludator = demoSaludator;
  }
  public hello(name: string): string {
    this.logger.info("Calling demo service implementation");
    return this.demoSaludator.greet(`${name} test name`);
  }
}

export default DemoService;
