import { FlyBehavior, QuackBehavior } from "./example1/interfaces";

export default class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  constructor() {}

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }
}
