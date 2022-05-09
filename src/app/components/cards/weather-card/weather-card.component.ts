import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemperatureUnit, WeatherData } from '../../../models/weather.model';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'ipt-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  city = 'Bern';

  units: { key: TemperatureUnit; value: string; symbol: string }[] = [
    { key: 'metric', value: 'Celsius', symbol: 'C' },
    { key: 'imperial', value: 'Fahrenheit', symbol: 'F' },
    { key: 'kelvin', value: 'Kelvin', symbol: 'K' },
  ];
  selectedUnit: TemperatureUnit = 'metric';

  weatherData: Observable<WeatherData>;

  constructor(private weatherService: WeatherService) {
    this.weatherData = weatherService.weatherData;
  }

  ngOnInit() {
    this.getWeather();
  }

  changeUnit(unit: TemperatureUnit) {
    this.selectedUnit = unit;
    this.getWeather();
  }

  setCity(city: string) {
    this.city = city;
    this.getWeather();
  }

  getWeatherIconUrl(weatherData: WeatherData): string {
    return `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  }

  getTemperatureSymbol() {
    return this.units.find((unit) => unit.key === this.selectedUnit).symbol;
  }

  private getWeather(): void {
    this.weatherService.getWeather(this.city, this.selectedUnit);
  }
}
