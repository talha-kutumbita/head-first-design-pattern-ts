import { KnifeFactory } from "./KnifeFactory";
import { knifeType } from "./interface/enum";
import { IKnife } from "./interface/IKnife";

export class KnifeStore {
  constructor(private knifeFactory: KnifeFactory) {}

  orderKnife(knifeType: knifeType): IKnife {
    const knife = this.knifeFactory.createKnife(knifeType);

    knife.sharpen();
    knife.polish();
    knife.package();

    return knife;
  }
}
