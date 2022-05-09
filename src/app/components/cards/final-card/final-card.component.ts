import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AareService } from '../../../services/aare.service';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'ipt-final-card',
  templateUrl: './final-card.component.html',
  styleUrls: ['./final-card.component.scss'],
})
export class FinalCardComponent implements OnInit {
  aareTemperature: Observable<number>;
  weatherTemperature: Observable<number>;
  isWarmEnough: Observable<boolean>;

  beerImageUrl =
    'https://purepng.com/public/uploads/medium/purepng.com-beer-clipartbeerdrinkgoldenfoodgerman-21525885313xn1kd.png';
  swimImageUrl =
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimage_gallery%2Fn1600196.png&f=1&nofb=1.png';

  constructor(
    private aareService: AareService,
    private weatherService: WeatherService
  ) {
    this.aareTemperature = this.aareService.aareData.pipe(
      filter((data) => !!data),
      map((data) => data.aare)
    );
    this.weatherTemperature = combineLatest([
      this.weatherService.weatherData,
      this.weatherService.temperatureUnit,
    ]).pipe(
      filter(([data, _]) => !!data),
      map(([data, unit]) =>
        this.weatherService.getTemperatureInCelcius(data.main.temp, unit)
      )
    );
  }

  ngOnInit() {
    this.isWarmEnough = combineLatest([
      this.aareTemperature,
      this.weatherTemperature,
    ]).pipe(map(([aTemp, wTemp]) => aTemp + wTemp > 40));
  }
}
