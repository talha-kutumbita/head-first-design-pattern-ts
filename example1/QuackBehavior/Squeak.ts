import QuackBehavior from "../interfaces/QuackBehavior";

export default class Squeak implements QuackBehavior {
  quack() {
    this.squeak();
  }

  squeak() {
    console.log("Rubber duck Squeak");
  }
}
