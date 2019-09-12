import Duck from "./Duck";
import Quack from "./QuackBehavior/Quack";
import FlyWithWings from "./FlyBehaviors/FlyWithWings";

export default class MallardDuck extends Duck {
  public display(): void {
    console.log("Real Mallard Duck");
  }

  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }
}
