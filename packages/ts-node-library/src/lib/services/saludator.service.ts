
import { Singleton, AutoWired, Provides } from "typescript-ioc";

export default abstract class SaludatorService {
  abstract sayHello(name: String): String;
}
@Provides(SaludatorService) 
export class SaludatorServiceImpl implements SaludatorService{
  sayHello(name: String):String {
    return `Hello ${name}`;
  }
}
