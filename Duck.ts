import FlyBehavior from "./example1/interfaces/FlyBehavior";
import QuackBehavior from "./example1/interfaces/QuackBehavior";

export default abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  constructor() {}
  public abstract display(): void;

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  swim() {
    console.log("All ducks float, even decoys!");
  }
}

