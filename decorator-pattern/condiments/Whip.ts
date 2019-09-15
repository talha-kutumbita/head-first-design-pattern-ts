import { Condiment } from "../CondimentDecorator";
import { Beverage } from "../Beverage";

export class Whip extends Condiment {
  private whipCost: number = 0.2;

  constructor(private beverage: Beverage) {
    super();
  }

  getDescription() {
    return `${this.beverage.getDescription()}, Whip`;
  }

  cost(): number {
    return this.beverage.cost() + this.whipCost;
  }
}
