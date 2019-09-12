import FlyBehavior from "../interfaces/FlyBehavior";

export default class flyRocketPowered implements FlyBehavior {
  fly() {
    console.log("I'm flying with a rocket!");
  }
}
