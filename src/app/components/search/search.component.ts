import { Component, Input } from '@angular/core';
import { Office } from '../../models/office';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() offices: Office[];
}
