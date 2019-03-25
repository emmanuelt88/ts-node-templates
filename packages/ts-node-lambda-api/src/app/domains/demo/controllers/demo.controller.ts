import { injectable } from "inversify"
import { apiController,  GET } from "typescript-lambda-api"
import { BaseController } from "app/platform/controllers/BaseController";
@apiController("/demo")
@injectable()
export class DemoController extends BaseController<DemoController> {
    // GET, POST, PUT, PATCH and DELETE are supported
    @GET()
    public get() {
        return {
            "hello": "Hello"
        }
    }
 
    // sub routes can be specifed in method decorators
    @GET("/sub-resource")
    public getSubResource() {
        return {
            "hello": "world",
            "sub": "resource"
        }
    }
}