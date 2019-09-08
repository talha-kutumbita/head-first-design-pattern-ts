import Duck from "./Duck";
import Quack from "./example1/QuackBehavior/Quack";
import FlyWithWings from "./example1/FlyBehaviors/FlyWithWings";

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }
}
