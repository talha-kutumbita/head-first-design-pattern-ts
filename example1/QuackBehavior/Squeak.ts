import { QuackBehavior } from "../interfaces";

export default class Squeak implements QuackBehavior {
  quack() {
    this.squeak();
  }

  squeak() {
    return "Rubber duck Squeak";
  }
}
