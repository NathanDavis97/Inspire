export default class Weather {
  constructor(data, newCurrent) {
    console.log('[RAW WEATHER API DATA]', data);
    console.log(data.weather[0].icon)
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.floor((this.kelvin - 273.15) * 9 / 5 + 32)
    this.celsius = Math.floor(this.kelvin - 273.15)
    this.icon = data.weather.icon
    this.currentWeather = newCurrent || this.fahrenheit
  }


  /* REVIEW <img src="${this.icon}" alt="oops"> */

  get Template() {
    return `<div class="card opac">
                        <div class="card-body">
                            <h5 class="card-title" onclick="app.weatherController.toggleWeather('${this.currentWeather}'
                            )"> ${this.currentWeather}°</h5>
                              <p class="card-text">${this.city}</p>

                        </div>
                    </div>`

  }
}