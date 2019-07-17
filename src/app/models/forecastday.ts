import { Day } from './day';
import { Astro } from './astro';

export interface Forecastday {
    date: string;
    date_epoch: number;
    day: Day;
    astro: Astro;
}

