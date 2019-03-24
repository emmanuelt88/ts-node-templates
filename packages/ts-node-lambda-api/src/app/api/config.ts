import { ApiApp } from "typescript-lambda-api";
import { API } from "lambda-api";

export const configureApi = (app: ApiApp) => {
  app.configureApi((api: API) => {
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
 