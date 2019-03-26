import { LoggerFactory } from 'app/domains/platform/util/logger';
import { Controller } from 'typescript-lambda-api';

/**
 * Abstract controller for all API controllers
 */
export default abstract class AbstractController extends Controller {
  protected logger = LoggerFactory.getLogger(this);
}