import { QuackBehavior } from "../interfaces";

export default class MuteQuack implements QuackBehavior {
  quack() {
    this.muteQuack();
  }

  muteQuack() {
    return "Can't quack";
  }
}
