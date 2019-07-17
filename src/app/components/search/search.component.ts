import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { Office } from '../../models/office';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { startWith, map, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  @Input() set offices(offices: Office[]) {
    this.offices$.next(offices ? offices : []);
  }

  @Output() selectedOffice: EventEmitter<Office> = new EventEmitter<Office>();

  offices$: BehaviorSubject<Office[]> = new BehaviorSubject<Office[]>([]);
  filteredOffices$: Observable<Office[]> = this.offices$.asObservable();

  myControl = new FormControl();

  ngOnInit() {
    this.filteredOffices$ = this.offices$.pipe(
      switchMap(offices =>
        this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.name)),
          map(name => this._filter(offices, name))
        )
      )
    );

    this.subscriptions.push(
      this.myControl.valueChanges
        .pipe(filter(value => value && value.location))
        .subscribe(office => this.selectedOffice.emit(office))
    );
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  private _filter(offices: Office[], name: string): Office[] {
    const filterValue = name.toLowerCase();
    return offices.filter(
      option => option.name.toLowerCase().indexOf(filterValue) >= 0
    );
  }

  displayFn(office: Office) {
    return office ? office.name : null;
  }
}
