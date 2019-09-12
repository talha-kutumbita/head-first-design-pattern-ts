import FlyBehavior from "./interfaces/FlyBehavior";
import QuackBehavior from "./interfaces/QuackBehavior";

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

  setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  setQuackingBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }
}
