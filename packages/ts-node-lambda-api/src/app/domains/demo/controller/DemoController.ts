import { injectable } from "inversify"
import { apiController,  GET } from "typescript-lambda-api"
import AbstractController from "app/domains/platform/controller/AbstractController";
import DemoService from "app/domains/demo/service/DemoService";

@apiController("/demo")
@injectable()
export class DemoController extends AbstractController {
    private demoService: DemoService;

    public constructor(demoService: DemoService) {
        super();
        this.demoService = demoService;
    }

    // GET, POST, PUT, PATCH and DELETE are supported
    @GET()
    public get() {
        this.demoService.hello("John1")
        this.demoService.hello("John2")
        return {
            "hello": this.demoService.hello("John")
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