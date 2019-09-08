import { QuackBehavior } from "../interfaces";

export default class Quack implements QuackBehavior {
  quack() {
    this.realQuack();
  }

  realQuack() {
    return "Real Duck Quacking";
  }
}
