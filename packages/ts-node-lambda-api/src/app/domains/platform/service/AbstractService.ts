import { LoggerFactory } from "app/domains/platform/util/logger";
import { injectable } from "inversify";

@injectable()
export default abstract class AbstractService {
  protected logger = LoggerFactory.getLogger(this);
};