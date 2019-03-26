import { injectable } from "inversify"
import { apiController,  GET, pathParam, queryParam, POST, fromBody, PATCH, JsonPatch } from "typescript-lambda-api"
import AbstractController from "app/domains/platform/controller/AbstractController";
import DemoService from "app/domains/demo/service/DemoService";
import DemoEntityDto from "app/domains/demo/dto/DemoEntityDto";

@apiController("/demo")
@injectable()
export class DemoController extends AbstractController<DemoController> {
    private demoService: DemoService;

    public constructor(demoService: DemoService) {
        super();
        this.demoService = demoService;
    }

    // GET, POST, PUT, PATCH and DELETE are supported
    @GET("/:action")
    public get(@pathParam("action") action: string, @queryParam("target") target: string) {
        return {
            [action]: this.demoService.hello(target)
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

    @POST("/create")
    public creteResource(@fromBody entityDTO: DemoEntityDto) {
        this.logger.info(entityDTO);
        return entityDTO;
    }

    @PATCH("/partial-update")
    public patchResource(@fromBody jsonPatch: JsonPatch) {
        let existingDTO: DemoEntityDto = {
            "id": "3450839405",
            "name": "Name 01",
            "description": "description 01",
            "date": new Date("2019-03-25T15:31:28+00:00"),
            "number": 435345,
            "boolean": true,
            "nested": {
                "name": "Name 01",
                "description": "Name 01"
            }
        };
        this.logger.info(jsonPatch);
        const modifiedItem = this.applyJsonPatch<DemoEntityDto>(jsonPatch, existingDTO);
        return modifiedItem;
    }
}