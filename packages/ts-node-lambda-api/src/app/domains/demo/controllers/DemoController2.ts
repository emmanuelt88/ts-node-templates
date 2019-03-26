import { injectable } from "inversify"
import { apiController, Controller, GET } from "typescript-lambda-api"
import AbstractController from "app/platform/controllers/AbstractController";
 
@apiController("/demov2")
@injectable() // all controller classes must be decorated with injectable
// extending Controller is optional, it provides convience methods
export class Demo2Controller extends AbstractController {
    // GET, POST, PUT, PATCH and DELETE are supported
    @GET()
    public get() {
        return {
            "hello": "Hellov2"
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