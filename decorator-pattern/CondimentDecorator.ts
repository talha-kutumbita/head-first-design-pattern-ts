import { Beverage } from "./Beverage";

export abstract class Condiment extends Beverage {
  abstract getDescription();
}