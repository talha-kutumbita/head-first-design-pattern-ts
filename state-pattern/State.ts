import { IdleState } from "./states/IdleState";
import { HasOneDollar } from "./states/HasOneDollar";
import { OutOfStock } from "./states/OutOfStock";
import { IState } from "./IState";

export class State {
  constructor() {}

  static Idle: IState = new IdleState();
  static HasOneDollar: IState = new HasOneDollar();
  static OutOfStock: IState = new OutOfStock();
}
