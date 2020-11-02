import { Controller } from "./interface/controller";
import { Request, Response } from "express";
import { TRequest } from "./types/http";

export const AdapterRouter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request: TRequest = {
      body: req.body,
      params: req.params,
    };
    const response = await controller.handle(request);
    if (response.statusCode == 200 && response.statusCode <= 299) {
      res.status(response.statusCode).json(response.body);
    } else {
      res.status(response.statusCode).json({ error: response.body });
    }
  };
};
