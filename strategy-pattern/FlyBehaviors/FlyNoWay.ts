import FlyBehavior from "../interfaces/FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
  fly(){
    this.flyNoWay();
  }

  flyNoWay(){
    console.log('Fly No Way');
  }
}