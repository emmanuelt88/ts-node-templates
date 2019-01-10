import { Request, Response } from "express";
import * as pepe from "ts-node-library";


export let index = (req: Request, res: Response) => {

  res.json({
    message: "Test pesdhsdhfjksdfdfmnlpepe",
    version: 1,
  });
};
