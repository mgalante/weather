import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { OfficeApiService } from './services/office-api.service';
import { CurrentResponse } from './models/current-response';
import { Observable, BehaviorSubject } from 'rxjs';
import { Office } from './models/office';
import { map, switchMap, filter } from 'rxjs/operators';
import { Forecastday } from './models/forecastday';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private weatherApi: WeatherApiService,
    private officeApi: OfficeApiService
  ) {}

  currentOffice$: BehaviorSubject<Office> = new BehaviorSubject<Office>(null);

  offices$: Observable<Office[]> = this.officeApi.getOffices();

  current$: Observable<CurrentResponse> = this.currentOffice$.pipe(
    filter(x => x != null),
    switchMap(currentOffice =>
      this.weatherApi.getCurrent(currentOffice.location)
    )
  );

  days$: Observable<Forecastday[]> = this.currentOffice$.pipe(
    filter(x => x != null),
    switchMap(currentOffice =>
      this.weatherApi
        .getForecast(currentOffice.location)
        .pipe(map(x => x.forecast.forecastday))
    )
  );

  onSelectOffice(office: Office) {
    this.currentOffice$.next(office);
  }

  ngOnInit() {}
}
