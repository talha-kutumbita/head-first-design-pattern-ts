import QuackBehavior from "../interfaces/QuackBehavior";

export default class MuteQuack implements QuackBehavior {
  quack() {
    this.muteQuack();
  }

  muteQuack() {
    console.log("Can't quack");
  }
}
