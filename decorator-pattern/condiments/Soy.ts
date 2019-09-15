import { Condiment } from "../CondimentDecorator";
import { Beverage } from "../Beverage";

export class Soy extends Condiment {
  private soyCost: number = 0.2;

  constructor(private beverage: Beverage) {
    super();
  }

  getDescription() {
    return `${this.beverage.getDescription()}, Soy`;
  }

  cost(): number {
    return this.beverage.cost() + this.soyCost;
  }
}
