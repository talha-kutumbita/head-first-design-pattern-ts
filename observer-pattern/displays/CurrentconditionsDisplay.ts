import { IDisplayElement } from "../interfaces/IDisplayElement";
import { ISubject } from "../interfaces/ISubject";
import { IObserver } from "../interfaces/IObserver";

export class CurrentConditionDisplay implements IObserver, IDisplayElement {
  private temp: number;
  private humidity: number;

  constructor(private weatherData: ISubject) {
    weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(
      `Current conditions: ${this.temp} F degrees and ${this.humidity} humidity`
    );
  }
}
