import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { ApiConfig } from '../constant/api';
import { ClientBankDetails } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class BankDetailsService {
  url = `${ApiConfig.URL}${ApiConfig.BANKDETAILS}`;
  public bankDetails: ClientBankDetails | undefined;
  public detailList: ClientBankDetails [] = [];
  modalSubject = new Subject();
  modalObservable = this.modalSubject.subscribe();
  editModalSubject = new Subject<ClientBankDetails>();
  editModalObservable = this.editModalSubject.subscribe();
  clientBankDetails: ClientBankDetails;
  constructor(private httpClient: HttpClient) { }
  Add(clientBankDetails: ClientBankDetails): Observable<ClientBankDetails> {
    return this.httpClient.post<ClientBankDetails>(this.url, clientBankDetails).pipe(
      map(x => {
        this.detailList.push(x);
        return clientBankDetails;
      }),
      catchError(this.handleError('', clientBankDetails))
    );
  }

    
  edit(id: number): ClientBankDetails {
    return this.detailList.find(i => i.id == id);
  }
    //updating exisiting data
    update(clientBankDetails: ClientBankDetails): Observable<ClientBankDetails> {
      return this.httpClient.put<ClientBankDetails>(`${this.url}/${clientBankDetails.id}`, clientBankDetails).pipe(
        map(x => {
          var index = this.detailList.findIndex(i => i.id == x.id)
          this.detailList[index] = x;
          return clientBankDetails;
        }),
        catchError(this.handleError('', clientBankDetails))
      );
    }

    getList(): Observable<ClientBankDetails[]> {
      return this.httpClient.get<ClientBankDetails[]>(this.url).pipe(
        map(x => {
          this.detailList = x;
          return this.detailList;
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
    var clientBankDetails = this.detailList.find(i => i.id == id);
    this.editModalSubject.next(this.clientBankDetails);
  }
  //#endregion Method
}
