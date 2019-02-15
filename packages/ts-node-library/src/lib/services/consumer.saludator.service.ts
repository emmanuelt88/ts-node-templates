import { Inject} from "typescript-ioc";

import SaludatorService from "./saludator.service";

export default class ConsumerSaludatorService {
  
  @Inject
  private saludatorService!: SaludatorService;

  sayHello(name: String) {
    console.log("Saludando");
    return this.saludatorService.sayHello(name);
  }
}