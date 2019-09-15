import { Beverage } from "../Beverage";
import { Size } from "../enum";

export class HouseBlend extends Beverage {
  private houseBlendCost = {
    [Size.TALL]: 0.89,
    [Size.GRANDE]: 0.79,
    [Size.VENTI]: 0.69
  };

  constructor() {
    super();
    this.description = `House Blend Coffee ${this.size}`;
  }

  cost(): number {
    return this.houseBlendCost[this.size];
  }
}
