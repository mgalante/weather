import { TestBed } from '@angular/core/testing';

import { WeatherApiService } from './weather-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: WeatherApiService = TestBed.get(WeatherApiService);
    expect(service).toBeTruthy();
  });
});
