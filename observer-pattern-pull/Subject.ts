import { IObserver } from "./Interfaces/IObserver";
import { IPullStrategy } from "./Interfaces/IPullStrategy";

export abstract class Subject implements IPullStrategy {
  abstract getState();
  protected observers: IObserver[] = [];

  registerObserver(obs: IObserver) {
    this.observers.push(obs);
  }

  removeObserver(observer: IObserver) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObserver() {
    this.observers.forEach(obs => {
      obs.update();
    });
  }
}
