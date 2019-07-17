import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrentResponse } from 'src/app/models/current-response';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent  {
  @Input() data: CurrentResponse;
  

}
