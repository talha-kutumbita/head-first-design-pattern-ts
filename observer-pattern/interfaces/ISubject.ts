import { IObserver } from "./IObserver";

export interface ISubject {
  registerObserver(obs: IObserver);
  removeObserver(obs: IObserver);
  notifyObserver();
}
