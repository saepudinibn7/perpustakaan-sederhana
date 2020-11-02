import { Users } from "../../entities/Users";

export interface AddUsers {
  save: (data: Users) => Promise<Users>;
}

export interface findUser {
  findOne: (_id: string) => Promise<Users | any>;
}

export interface allUsers {
  all: (search: string, page: number, limit: number) => Promise<any>;
}

export interface updateUsers {
  update: (_id: string, data: Omit<Users, "id">) => Promise<any>;
}
