import { IState } from "../IState";
import { VendingMachine } from "../VendingMachine";

export class OutOfStock implements IState {
  insertDollar(vendingMachine: VendingMachine) {
    throw new Error("Method not implemented.");
  }

  ejectMoney(vendingMachine: VendingMachine) {
    throw new Error("Method not implemented.");
  }

  dispense(vendingMachine: VendingMachine) {
    throw new Error("Method not implemented.");
  }
}