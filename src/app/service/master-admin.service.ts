import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ApiConfig } from '../constant/api';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/internal/operators'; 
import { MasterAdmin } from '../models/masterAdmin';

@Injectable({
  providedIn: 'root'
})
export class MasterAdminService {
  url = `${ApiConfig.URL}${ApiConfig.MASTERADMIN}`;
  admin: MasterAdmin | undefined;
  adminList: MasterAdmin[] = [];
  constructor(
    public http: HttpClient
  ) { }

  getAdminDetails(): Observable<MasterAdmin[]> {
    return this.http.get<MasterAdmin[]>(this.url).pipe(
      map( x => {
        this.adminList = x;
        return this.adminList;
      })
    )
  }
  addAdmin(admin : MasterAdmin): Observable<MasterAdmin> {
    return this.http.post<MasterAdmin>(this.url, admin).pipe(
      map( x => {
        this.adminList.push(x);
        return admin;
      }),
      catchError(this.handleError('', admin))
    );
  }
  updateAdmin(admin: MasterAdmin): Observable<MasterAdmin> {
    return this.http.put<MasterAdmin>(`${this.url}/${this.admin.id}`, admin).pipe(
      map(x => {
        const index = this.adminList.findIndex(i => i.id === x.id);
        this.adminList[index] = x;
        return admin;
      }),
      catchError(this.handleError('', admin))
    )
  }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      //  this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
