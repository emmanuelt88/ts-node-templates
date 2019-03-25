import { AppConfig } from 'typescript-lambda-api';
import * as path from "path"
 
import { ApiConsoleApp } from "typescript-lambda-api-local"
import { configureApi } from './config';
 
// if you use a different directory, point to it here instead of 'controllers'
let appConfig = new AppConfig();
 
appConfig.base = "/api/v1"
appConfig.version = "v1"

let app = new ApiConsoleApp(path.join(__dirname, "controllers"), appConfig)

configureApi(app);

app.runServer(process.argv)