import "reflect-metadata";
import { provide } from "inversify-binding-decorators";
import { injectable, inject } from "inversify";
import SaludatorService from "./saludator.service";



export default class ConsumerSaludatorService {
  private _saludatorService: SaludatorService;

  public constructor(@inject(SaludatorService) saludatorService: SaludatorService) {
      this._saludatorService = saludatorService;
  }

  sayHello(name: String) {
    console.log("Saludando");
    return this._saludatorService.sayHello(name);
  }
}