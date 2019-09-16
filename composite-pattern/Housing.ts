import { IStructure } from "./IStructure";
import * as _ from "lodash";

export class Housing implements IStructure {
  structures: IStructure[] = [];

  constructor(private address) {}

  addStructure(component: IStructure) {
    this.structures.push(component);
    return this.structures.length - 1;
  }

  getStructure(componentIndex):IStructure {
    return this.structures[componentIndex];
  }

  enter() {
    console.log(`Entering in to ${this.address}`);
  }

  exit() {
    console.log(`Exiting from building ${this.address}`);
  }

  location() {
    console.log(`You are currently in ${this.getName()}. It has`);
    for (const structure of this.structures) {
      console.log(`- ${structure.getName()}`);
    }
  }

  getName() {
    return this.address;
  }
}
