import { TRequest, TResponse } from "../types/http";

export interface Controller {
  handle: (request: TRequest) => Promise<TResponse>;
}
