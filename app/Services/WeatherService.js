import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  toggleWeather(x) {
    let newCurrent = 0
    if (ProxyState.weather.fahrenheit == x) {
      newCurrent = ProxyState.weather.celsius
    } else { newCurrent = ProxyState.weather.fahrenheit }
    ProxyState.weather.currentWeather = newCurrent
    console.log(newCurrent);
    this.getWeather(newCurrent)
  }
  async getWeather(newCurrent) {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data, newCurrent);
    console.log(ProxyState.weather, "yes");
  }
}

const weatherService = new WeatherService();
export default weatherService;