import { SaludatorService, ConsumerSaludatorService } from './lib/services';
import ContainerProvider from "./lib/platform/ioc.provider";

const container = ContainerProvider.getInstance();


export {
  container,
  SaludatorService,
  ConsumerSaludatorService
}