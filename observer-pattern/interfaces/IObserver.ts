export interface IObserver {
  update(temp: number, humidity: number, pressure: number);
}
