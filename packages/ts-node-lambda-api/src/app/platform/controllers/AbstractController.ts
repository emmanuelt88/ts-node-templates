import { LoggerFactory } from 'app/platform/utils/logger';
import { Controller } from 'typescript-lambda-api';

export default abstract class AbstractController extends Controller {
  protected logger = LoggerFactory.getLogger(this);
}