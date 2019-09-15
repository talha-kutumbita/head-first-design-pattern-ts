import { Condiment } from "../CondimentDecorator";
import { Beverage } from "../Beverage";

export class Mocha extends Condiment {
  private mochaCost: number = 0.2;

  constructor(private beverage: Beverage) {
    super();
  }

  getDescription() {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  cost(): number {
    return this.beverage.cost() + this.mochaCost;
  }
}
