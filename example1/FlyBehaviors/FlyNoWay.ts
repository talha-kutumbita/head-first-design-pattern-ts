import { FlyBehavior } from "../interfaces";

export default class FlyNoWay implements FlyBehavior {
  fly(){
    this.flyNoWay();
  }

  flyNoWay(){
    return 'Fly No Way'
  }
}