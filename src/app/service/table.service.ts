import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { ApiConfig } from '../constant/api';
import { Hotel } from '../models/tabelConfiguration.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  url = `${ApiConfig.URL}${ApiConfig.HOTEL}`;
  userData = JSON.parse(localStorage.getItem('HMSUserData'));
  tableList: Hotel[] = [];
  constructor(public http: HttpClient) { }

  getTableData(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.url}/Get/${this.userData.id}`).pipe(
      map( x => {
        this.tableList = x;
        return this.tableList;
      })
    )
  }
}
