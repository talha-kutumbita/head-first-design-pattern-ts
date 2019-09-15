import { Size } from "./enum";

export abstract class Beverage {
  protected description: string;
  protected size: Size = Size.TALL;

  getDescription() {
    return this.description;
  }

  getSize() {
    return this.size;
  }

  setSize(size: Size) {
    this.size = size;
  }

  abstract cost(): number;
}
