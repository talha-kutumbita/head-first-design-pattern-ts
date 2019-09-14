import { IKnife } from "../interface/IKnife";

export class ChefsKnife implements IKnife {
  sharpen() {
    throw new Error("Method not implemented.");
  }
  polish() {
    throw new Error("Method not implemented.");
  }
  package() {
    throw new Error("Method not implemented.");
  }
  cut() {
    console.log("Chef is cutting");
  }
}
