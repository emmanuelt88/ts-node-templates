import * as path from "path"
 
import { AppConfig, ApiLambdaApp } from "typescript-lambda-api"
import { configureApi } from "./config";
 
export async function handler(event, context) {
   try {
    let appConfig = new AppConfig();
 
    appConfig.base = "/api/v1"
    appConfig.version = "v1"
 
    let controllersPath = path.join(__dirname, "controllers")
    let app = new ApiLambdaApp(controllersPath, appConfig)
 
    
    configureApi(app);
    console.info(controllersPath);    
    console.info(app);    
    return await app.run(event, context)

   } catch (error) {
       console.error(error);
       return path.join(__dirname, "controllers");
   }
}
