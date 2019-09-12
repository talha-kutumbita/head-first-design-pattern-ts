import QuackBehavior from "../interfaces/QuackBehavior";

export default class Quack implements QuackBehavior {
  quack() {
    this.realQuack();
  }

  realQuack() {
    console.log("Quack");
  }
}
