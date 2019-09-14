import { ISubject } from "./interfaces/ISubject";
import { IObserver } from "./interfaces/IObserver";

export class WeatherData implements ISubject {
  private observers: IObserver[];
  private temp: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(obs: IObserver) {
    this.observers.push(obs);
  }

  removeObserver(obs: IObserver) {
    this.observers = this.observers.filter(o => o !== obs);
  }

  notifyObserver() {
    for (const obs of this.observers) {
      obs.update(this.temp, this.humidity, this.pressure);
    }
  }

  getObserver() {
    return this.observers;
  }

  measurementChanged() {
    this.notifyObserver();
  }

  setMeasurement(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementChanged();
  }

  getTemp() {
    return this.temp;
  }

  getHumidity() {
    return this.humidity;
  }

  getPressure() {
    return this.pressure; 
  }
}
