import { IKnife } from "../../factory-object-pattern/interface/IKnife";

export class BudgetChiefsKnife implements IKnife {
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
    console.log('cutting steak');
  }
}