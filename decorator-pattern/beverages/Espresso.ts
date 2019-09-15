import { Beverage } from "../Beverage";
import { Size } from "../enum";

export class Espresso extends Beverage {
  private espressoCost = {
    [Size.TALL] : 1.99,
    [Size.GRANDE] : 1.79,
    [Size.VENTI] : 1.59,
  }

  constructor() {
    super();
    this.description = `Espresso - ${this.size}`;
  }

  cost(): number {
    return this.espressoCost[this.size];
  }
}
