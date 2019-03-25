import { LoggerFactory } from 'app/platform/utils/logger';
import { Controller } from 'typescript-lambda-api';
export class BaseController<T> extends Controller {
  protected logger = LoggerFactory.getLogger(this);
}