import { Current } from './current';
import { Location } from './location';

export interface CurrentResponse {
    location: Location;
    current: Current;
}
