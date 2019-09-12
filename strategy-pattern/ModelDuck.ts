import Duck from "./Duck";
import FlyNoWay from "./FlyBehaviors/FlyNoWay";
import Quack from "./QuackBehavior/Quack";

export default class ModelDuck extends Duck {
  public display(): void {
    throw new Error("I am a model duck");
  }

  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }
}
