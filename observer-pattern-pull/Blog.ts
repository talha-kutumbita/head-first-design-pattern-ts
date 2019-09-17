import { Subject } from "./Subject";
import { IPullStrategy } from "./Interfaces/IPullStrategy";


export class Blog extends Subject{
  private state: {} = {};

  public getState() {
    return this.state;
  }
}
