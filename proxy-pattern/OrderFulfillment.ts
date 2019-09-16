import { IOrder } from "./IOrder";

export class OrderFulfillment implements IOrder {
  fulfillOrder() {
    // check which ware house has the stock and call fullfillment to that warehouse.
  }
  
}