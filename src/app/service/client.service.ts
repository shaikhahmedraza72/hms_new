import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { ApiConfig } from '../constant/api';
import { Client, CLientCategory } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = `${ApiConfig.URL}${ApiConfig.CLIENT}`;
  categoryUrl = `${ApiConfig.URL}${ApiConfig.CLIENTCATEGORY}`;
  public client: Client | undefined;
  public clientList: Client [] = [];
  modalSubject = new Subject();
  modalObservable = this.modalSubject.subscribe();

  editModalSubject = new Subject<Client>();
  editModalObservable = this.editModalSubject.subscribe();
  constructor(private httpClient: HttpClient) { }
  Add(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.url, client).pipe(
      map(x => {
        this.clientList.push(x);
        return client;
      }),
      catchError(this.handleError('', client))
    );
  }

  
  edit(id: number): Client {
    return this.clientList.find(i => i.id == id);
  }

    //updating exisiting data
    update(client: Client): Observable<Client> {
      return this.httpClient.put<Client>(`${this.url}/${client.id}`, client).pipe(
        map(x => {
          var index = this.clientList.findIndex(i => i.id == x.id)
          this.clientList[index] = x;
          return client;
        }),
        catchError(this.handleError('', client))
      );
    }

    getList(): Observable<Client[]> {
      return this.httpClient.get<Client[]>(this.url).pipe(
        map(x => {
          this.clientList = x;
          return this.clientList;
        })
      );
    } 

    getClientCategory(): Observable<CLientCategory[]> {
      return this.httpClient.get<CLientCategory[]>(this.categoryUrl).pipe(
        map(x => {
          return x;
        })
      );
    }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      //  this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  openModal() {
    this.modalSubject.next();
  }
  openEditModel(id: number) {
    var client = this.clientList.find(i => i.id == id);
    this.editModalSubject.next(this.client);
  }
  //#endregion Method
}
