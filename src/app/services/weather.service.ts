import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TemperatureUnit, WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = '48debabaf0b5cb3e9333c46a1c17f631';
  private readonly baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  private readonly weatherDataSubject = new BehaviorSubject<WeatherData | null>(
    null
  );
  private readonly temperatureUnitSubject =
    new BehaviorSubject<TemperatureUnit>('metric');

  temperatureUnit = this.temperatureUnitSubject.asObservable();
  weatherData = this.weatherDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getWeather(city: string, unit: TemperatureUnit) {
    this.temperatureUnitSubject.next(unit);
    this.weatherDataSubject.next(null);

    const params = new HttpParams()
      .set('appid', this.apiKey)
      .set('q', city)
      .set('units', unit);

    this.http
      .get<WeatherData>(this.baseUrl, { params })
      .subscribe((weatherData) => this.weatherDataSubject.next(weatherData));
  }

  getTemperatureInCelcius(temperature: number, unit: TemperatureUnit): number {
    switch (unit) {
      case 'kelvin':
        return Number((temperature - 273).toFixed(2));
      case 'imperial':
        return Number((((temperature - 32) * 5) / 9).toFixed(2));
      case 'metric':
      default:
        return temperature;
    }
  }
}
