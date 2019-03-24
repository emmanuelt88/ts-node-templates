import { injectable } from "inversify"
import { apiController, Controller, GET } from "typescript-lambda-api"
 
@apiController("/demo")
@injectable() // all controller classes must be decorated with injectable
// extending Controller is optional, it provides convience methods
export class DemoController extends Controller {
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