import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { OfficeApiService } from './services/office-api.service';
import { CurrentResponse } from './models/current-response';
import { Observable } from 'rxjs';
import { ForecastResponse } from './models/forecast-response';
import { Office } from './models/office';
import { map } from 'rxjs/operators';
import { Forecastday } from './models/forecastday';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private weatherApi: WeatherApiService, private officeApi: OfficeApiService) {
  }

  current$: Observable<CurrentResponse> = this.weatherApi.getCurrent('Argentina/Mendoza');
  days$: Observable<Forecastday[]> = this.weatherApi.getForecast('Argentina/Mendoza').pipe(map(x => x.forecast.forecastday));
  offices$: Observable<Office[]> = this.officeApi.getOffices();

  ngOnInit() { }

}
