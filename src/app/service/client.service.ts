import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { ApiConfig } from '../constant/api';
import { Client, ClientBankDetails, CLientCategory, EndUser } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // Client serice properties
  url = `${ApiConfig.URL}${ApiConfig.CLIENT}`;
  categoryUrl = `${ApiConfig.URL}${ApiConfig.CLIENTCATEGORY}`;
  public client: Client | undefined;
  public clientList: Client[] = [];
  modalSubjectForClient = new Subject();
  modalObservableForClient = this.modalSubjectForClient.subscribe();
  editModalSubject = new Subject<Client>();
  editModalObservable = this.editModalSubject.subscribe();

  // Bank detail service properties
  bankUrl = `${ApiConfig.URL}${ApiConfig.BANKDETAILS}`;
  public bankDetails: ClientBankDetails | undefined;
  public detailList: ClientBankDetails[] = [];
  modalSubjectForBank = new Subject();
  modalObservableForBank = this.modalSubjectForBank.subscribe();
  editModalSubjectForBank = new Subject<ClientBankDetails>();
  editModalObservableForBank = this.editModalSubjectForBank.subscribe();
  clientBankDetails: ClientBankDetails;
  
  // End User service propertie
  endUserUrl = `${ApiConfig.URL}${ApiConfig.ENDUSER}`;
  public endUser: EndUser | undefined;
  public EndUserList: EndUser [] = [];
  modalSubjectForEndUser = new Subject();
  modalObservableForEndUSer = this.modalSubjectForEndUser.subscribe();
  editModalSubjectForEndUser = new Subject<EndUser>();
  editModalObservableForEndUser = this.editModalSubjectForEndUser.subscribe();

  constructor(private httpClient: HttpClient, private httpBank: HttpClient, private httpEndUser: HttpClient) { }
  
  // Add Client
  AddClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.url, client).pipe(
      map(x => {
        this.clientList.push(x);
        return client;
      }),
      catchError(this.handleError('', client))
    );
  }


  // Add Bank DEtails
  AddBankDetails(clientBankDetails: ClientBankDetails): Observable<ClientBankDetails> {
    return this.httpBank.post<ClientBankDetails>(this.bankUrl, clientBankDetails).pipe(
      map(x => {
        this.detailList.push(x);
        return clientBankDetails;
      }),
      catchError(this.handleError('', clientBankDetails))
    );
  }
  
  // Add End USer
  AddEndUser(endUser: EndUser): Observable<EndUser> {
    return this.httpEndUser.post<EndUser>(this.endUserUrl, endUser).pipe(
      map(x => {
        this.EndUserList.push(x);
        return endUser;
      }),
      catchError(this.handleError('', endUser))
    );
  }

  // Edit Client
  editClient(id: number): Client {
    return this.clientList.find(i => i.id == id);
  }

  // Edit Bank Details
  editBankDetails(id: number): ClientBankDetails {
    return this.detailList.find(i => i.id === id);
  }

  // Edit End User
  editEndUser(id: number): EndUser {
    return this.EndUserList.find(i => i.id === id);
  }

  // updating exisiting client's data
  updateCLient(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.url}/${client.id}`, client).pipe(
      map(x => {
        // tslint:disable-next-line:prefer-const
        let index = this.clientList.findIndex(i => i.id === x.id)
        this.clientList[index] = x;
        return client;
      }),
      catchError(this.handleError('', client))
    );
  }

  // updating exisiting bank details
  updateBankDetails(clientBankDetails: ClientBankDetails): Observable<ClientBankDetails> {
    return this.httpBank.put<ClientBankDetails>(`${this.bankUrl}/${clientBankDetails.id}`, clientBankDetails).pipe(
      map(x => {
        const index = this.detailList.findIndex(i => i.id === x.id);
        this.detailList[index] = x;
        return clientBankDetails;
      }),
      catchError(this.handleError('', clientBankDetails))
    );
  }

  // Updating existing end user
  updateEndUser(endUser: EndUser): Observable<EndUser> {
    return this.httpEndUser.put<EndUser>(`${this.bankUrl}/${endUser.id}`, endUser).pipe(
      map(x => {
        const index = this.EndUserList.findIndex(i => i.id === x.id);
        this.EndUserList[index] = x;
        return endUser;
      }),
      catchError(this.handleError('', endUser))
    );
  }

  // Get client list
  getClientList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url).pipe(
      map(x => {
        this.clientList = x;
        return this.clientList;
      })
    );
  }

  // Get bank detail list
  getBankDetailList(): Observable<ClientBankDetails[]> {
    return this.httpBank.get<ClientBankDetails[]>(this.bankUrl).pipe(
      map(x => {
        this.detailList = x;
        return this.detailList;
      })
    );
  }

  // Get end user list
  getEndUserList(): Observable<EndUser[]> {
    return this.httpEndUser.get<EndUser[]>(this.endUserUrl).pipe(
      map(x => {
        this.EndUserList = x;
        return this.EndUserList;
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
  openModalForClient() {
    this.modalSubjectForClient.next();
  }
  openEditModelForClient(id: number) {
    const client = this.clientList.find(i => i.id == id);
    this.editModalSubject.next(this.client);
  }
  //#endregion Method

  openModalForBank() {
    this.modalSubjectForBank.next();
  }
  openEditModelForBank(id: number) {
    this.clientBankDetails = this.detailList.find(i => i.id == id);
    this.modalSubjectForBank.next(this.clientBankDetails);
  }
  //#endregion Method

  openModalForEndUser() {
    this.modalSubjectForEndUser.next();
  }
  openEditModelForEndUser(id: number) {
    this.endUser = this.EndUserList.find(i => i.id == id);
    this.modalSubjectForEndUser.next(this.endUser);
  }
  //#endregion Method

}
