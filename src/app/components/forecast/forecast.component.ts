import { Component, Input } from '@angular/core';
import { ForecastResponse } from 'src/app/models/forecast-response';
import { Forecastday } from 'src/app/models/forecastday';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  @Input() days: Forecastday[] = [];
}
