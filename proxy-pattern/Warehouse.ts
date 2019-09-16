import { IOrder } from "./IOrder";
// real subject class
export class Warehouse implements IOrder {
  constructor(private name: string) {}
  fulfillOrder() {
    console.log(`Warehouse ${name} is processing the order`);
  }

  currentInventory(itemId) {
    //check stock and response how many in stock and return
    return 0;
  }
}
