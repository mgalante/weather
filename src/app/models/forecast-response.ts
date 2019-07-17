import { Current } from './current';
import { Forecast } from './forecast';

export interface ForecastResponse {
    location: Location;
    current: Current;
    forecast: Forecast;
}

