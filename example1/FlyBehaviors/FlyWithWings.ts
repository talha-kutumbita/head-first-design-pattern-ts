import { FlyBehavior } from "../interfaces";

export default class FlyWithWings implements FlyBehavior {
  fly() {
    this.flyWithWings();
  }

  flyWithWings() {
    return "Flying with Wings";
  }
}
