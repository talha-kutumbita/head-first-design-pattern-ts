import { IState } from "../IState";
import { VendingMachine } from "../VendingMachine";

export class HasOneDollar implements IState {
  insertDollar(vendingMachine: VendingMachine) {
    console.log("Already have one dollar");

    vendingMachine.doReturnMoney();
    vendingMachine.setState(vendingMachine.getIdleState());
  }

  ejectMoney(vendingMachine: VendingMachine) {
    console.log("Returning Money");
    vendingMachine.doReturnMoney();
    vendingMachine.setState(vendingMachine.getIdleState());
  }

  dispense(vendingMachine: VendingMachine) {
    console.log("Despensing Product");
    if (vendingMachine.getCount() > 1) {
      vendingMachine.doReleaseProduct();
      vendingMachine.setState(vendingMachine.getIdleState());
    } else {
      vendingMachine.doReleaseProduct();
      vendingMachine.setState(vendingMachine.getOutOfStock());
    }
  }
}
