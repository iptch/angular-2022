import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../../../models/weather.model';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'ipt-weather-details',
  templateUrl: './weather-details.component.html',
})
export class WeatherDetailsComponent {
  weatherData: Observable<WeatherData>;

  constructor(private weatherService: WeatherService) {
    this.weatherData = this.weatherService.weatherData;
  }
}
