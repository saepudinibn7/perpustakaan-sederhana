import { TRequest, TResponse } from "../../../helpers/types/http";
import { ok } from "../../../helpers/http";

export class CreateAccount {
  constructor() {}

  async handle(request: TRequest): Promise<TResponse> {
    return ok({ data: request.body });
  }
}
