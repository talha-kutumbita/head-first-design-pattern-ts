import { WeatherData } from "./WeatherData";
import { CurrentConditionDisplay } from "./displays/CurrentConditionsDisplay";

const weatherData = new WeatherData();
const currentDisplay:CurrentConditionDisplay = new CurrentConditionDisplay(weatherData);

weatherData.setMeasurement(80, 65, 30.4);
weatherData.setMeasurement(82, 70, 29.2);
weatherData.setMeasurement(78, 90, 30.8);
