import { IObserver } from "./Interfaces/IObserver";
import { Subject } from "./Subject";

export class Subscriber implements IObserver {
  constructor(private subject: Subject) {
    this.subject.registerObserver(this);
  }

  update() {
    this.subject.getState();
  }
}
