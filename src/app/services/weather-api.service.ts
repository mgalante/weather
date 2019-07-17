import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CurrentResponse } from '../models/current-response';
import { ForecastResponse } from '../models/forecast-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private http: HttpClient) { }

  getCurrent(place: string) {
    return this.http.get<CurrentResponse>('http://api.apixu.com/v1/current.json', {
      params: {
        key: environment.key,
        q: place
      }
    });
  }

  getForecast(place: string) {
    return this.http.get<ForecastResponse>('http://api.apixu.com/v1/forecast.json',
      {
        params: {
          key: environment.key,
          q: place,
          days: '7'
        }
      });
  }
}
