import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Office } from '../models/office';

@Injectable({
  providedIn: 'root'
})
export class OfficeApiService {
  constructor(private http: HttpClient) { }

  getOffices() {
    return this.http.get<Office[]>('/assets/offices.json');
  }
}
