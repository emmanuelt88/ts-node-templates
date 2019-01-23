import { injectable } from 'inversify';
import "reflect-metadata";
import { provide } from "inversify-binding-decorators";

export default class SaludatorService {
  sayHello(name: String) {
    return `Hello ${name}`;
  }
}
