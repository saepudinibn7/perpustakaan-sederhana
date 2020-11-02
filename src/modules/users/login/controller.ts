import { ok, unauthorization } from "../../../helpers/http";
import { TRequest, TResponse } from "../../../helpers/types/http";
import { UsersRepository } from "../../../services/users/UsersRepositroy";
import { compareSync } from "bcryptjs";
import * as jwt from "jsonwebtoken";

export class AuthorizationController {
  constructor(private readonly users: UsersRepository) {}

  async handle(request: TRequest): Promise<TResponse> {
    const match = await this.users.findOne(request.body.username);
    if (match) {
      if (compareSync(request.body.password, match.password)) {
        const token = jwt.sign(
          {
            _id: match.id,
            username: match.username,
            name: match.name,
          },
          "sgg"
        );
        return ok({ token });
      }
      return unauthorization("Password salah");
    }
    return unauthorization("Tidak ditemukan");
  }
}
