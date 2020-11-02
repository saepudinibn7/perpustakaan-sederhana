import { Controller } from "../../../helpers/interface/controller";
import { CreateAccount } from "./controller";

export default (): Controller => {
  const controller = new CreateAccount();
  return controller;
};
