import { State } from "./State";
import { IState } from "./IState";

export class VendingMachine {
  private currentState: IState;
  private idleState: IState;
  private hasOneDollarState: IState;
  private outOfStockState: IState;
  private count: number;

  constructor(count: number) {
    this.idleState = State.Idle;
    this.hasOneDollarState = State.HasOneDollar;
    this.outOfStockState = State.OutOfStock;

    if (count > 0) {
      this.currentState = this.idleState;
      this.count = count;
    } else {
      this.currentState = this.outOfStockState;
      this.count = 0;
    }
  }

  insertDollar() {
    this.currentState.insertDollar(this);
  }

  ejectMoney() {
    this.currentState.ejectMoney(this);
  }

  dispense() {
    this.currentState.dispense(this);
  }

  doReleaseProduct() {
    console.log("Release Product");
    this.count -= 1;
  }

  doReturnMoney() {
    console.log("Returning one dollar");
  }

  setState(state: IState) {
    this.currentState = state;
  }

  getHasOneDollarState(): IState {
    return this.hasOneDollarState;
  }

  getIdleState(): IState {
    return this.idleState;
  }

  getOutOfStock(): IState {
    return this.outOfStockState;
  }

  getCount() {
    return this.count;
  }
}
