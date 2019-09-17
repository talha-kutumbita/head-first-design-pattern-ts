import { IState } from "../IState";
import { VendingMachine } from "../VendingMachine";
import { State } from "../State";
import { HasOneDollar } from "./HasOneDollar";

export class IdleState implements IState {
  insertDollar(vendingMachine: VendingMachine) {
    console.log("Insert One dollar in Idle State");
    vendingMachine.setState(vendingMachine.getHasOneDollarState());
  }

  ejectMoney(vendingMachine: VendingMachine) {
    console.log("No Money to Return");
  }

  dispense(vendingMachine: VendingMachine) {
    console.log("Payment Required");
  }
}
