import { knifeType } from "./interface/enum";
import { IKnife } from "./interface/IKnife";
import { ChefsKnife } from "./knives/ChefsKnife";
import { SteakKnife } from "./knives/SteakKnife";

export class KnifeFactory {
  createKnife(type: string): IKnife {
    let knife: IKnife;
    switch (type) {
      case knifeType.CHEFS:
        knife = new ChefsKnife();
        break;
      case knifeType.STEAK:
        knife = new SteakKnife();
        break;
    }
    return knife;
  }
}
