import { LoggerFactory } from "app/platform/utils/logger";
import { injectable } from "inversify";

@injectable()
export default abstract class AbstractService {
  protected logger = LoggerFactory.getLogger(this);
};