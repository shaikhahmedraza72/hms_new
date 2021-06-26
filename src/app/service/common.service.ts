import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { ApiConfig } from '../constant/api';
import { Listmodal } from '../models/listModal';

@Injectable({
  providedIn: 'root'
})
export class CommonService { 
  cityUrl = `${ApiConfig.URL}${ApiConfig.CITY}`;
  stateUrl = `${ApiConfig.URL}${ApiConfig.STATE}`;
  constructor(private http: HttpClient) { }
  getCities(): Observable<Listmodal[]> {
    return this.http.get<Listmodal[]>(this.cityUrl).pipe(
      map(x => {
        return x;
      })
    );
  }

  getStates(): Observable<Listmodal[]> {
    return this.http.get<Listmodal[]>(this.stateUrl).pipe(
      map(x => {
        return x;
      })
    );
  }
}
