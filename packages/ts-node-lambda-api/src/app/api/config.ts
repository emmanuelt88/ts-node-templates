import { DemoController } from './../domains/demo/controllers/demo.controller';
import { ApiApp } from "typescript-lambda-api";
import { API } from "lambda-api";
import { getLoggerFor } from "../platform/logging/logger";

const logger = getLoggerFor("DemoController");
export const configureApi = (app: ApiApp) => {
  app.configureApi((api: API) => {

    
    
    logger.debug("Example of logging");
    // add middleware handler, for example
    api.use((req,res,next) => {

      
        // Request Interceptors
        // Example: Checking a header for a token
        // if (req.headers.authorization !== "secretToken") {
        //     res.error(401, "Not Authorized");
        //     return;
        // }
 
        next(req, res, next);
    })
})

};
 