import { WeatherData } from "./WeatherData";

const weatherData = new WeatherData();
const obs1 = {
  update: () => {},
  name: 'display1'
};
const obs2 = {
  update: () => {},
  name: 'display2'
};

weatherData.registerObserver(obs1);
weatherData.registerObserver(obs2);
console.log(weatherData.getObserver());
weatherData.removeObserver(obs2);
console.log(weatherData.getObserver());
weatherData.removeObserver(obs1);
console.log(weatherData.getObserver());