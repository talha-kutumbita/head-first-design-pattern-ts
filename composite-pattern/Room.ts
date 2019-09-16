import { IStructure } from "./IStructure";

export class Room implements IStructure {
  constructor(private name: string) {}

  enter() {
    console.log(`You have entered ${this.name}`);
  }

  exit() {
    console.log(`You have exited ${this.name}`);
  }

  location() {
    console.log(`You are currently in ${this.name}`);
  }

  getName() {
    return this.name;
  }
}
