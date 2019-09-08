import FlyBehavior from "../interfaces/FlyBehavior";

export default class FlyWithWings implements FlyBehavior {
  fly() {
    this.flyWithWings();
  }

  flyWithWings() {
    console.log("I'm Flying!!");
  }
}
