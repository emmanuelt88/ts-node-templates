import { getLoggerFor } from 'app/platform/logging/logger';
import { Controller } from 'typescript-lambda-api';


export class BaseController<T> extends Controller {
  protected logger = getLoggerFor(this);
}