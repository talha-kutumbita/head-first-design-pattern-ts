import { VendingMachine } from "./VendingMachine";

export interface IState {
  insertDollar(vendingMachine: VendingMachine);
  ejectMoney(vendingMachine: VendingMachine);
  dispense(vendingMachine: VendingMachine);
}
