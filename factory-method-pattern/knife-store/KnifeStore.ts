import { IKnife } from "../../factory-object-pattern/interface/IKnife";
import { knifeType } from "../../factory-object-pattern/interface/enum";

export abstract class KnifeStore {
  orderKnife(type: knifeType): IKnife {
    const knife: IKnife = this.createKnife(type);

    knife.sharpen();
    knife.polish();
    knife.package();

    return knife;
  }

  abstract createKnife(type: knifeType): IKnife;
}
