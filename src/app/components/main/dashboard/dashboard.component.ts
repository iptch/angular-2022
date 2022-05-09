import { Component } from '@angular/core';
import {
  AARE_BACKGROUND_IMAGE_URL,
  FINAL_BACKGROUND_IMAGE_URL,
  WEATHER_BACKGROUND_IMAGE_URL,
} from '../../../models/images.model';

@Component({
  selector: 'ipt-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  aareBackgroundImageUrl = AARE_BACKGROUND_IMAGE_URL;
  weatherBackgroundImageUrl = WEATHER_BACKGROUND_IMAGE_URL;
  finalBackgroundImageUrl = FINAL_BACKGROUND_IMAGE_URL;
}
