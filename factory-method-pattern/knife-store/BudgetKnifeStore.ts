import { KnifeStore } from "./KnifeStore";
import { knifeType } from "../../factory-object-pattern/interface/enum";
import { IKnife } from "../../factory-object-pattern/interface/IKnife";
import { BudgetChiefsKnife } from "../knife-factory/BudgetChiefsKnife";
import { BudgetSteakKnife } from "../knife-factory/BudgetSteakKnife";

export class BudgetKnifeStore extends KnifeStore {
  createKnife(type: knifeType): IKnife {
    let knife: IKnife;

    if (type === knifeType.CHEFS) {
      knife = new BudgetChiefsKnife();
    }

    if (type === knifeType.STEAK) {
      knife = new BudgetSteakKnife();
    }

    return knife;
  }
}
