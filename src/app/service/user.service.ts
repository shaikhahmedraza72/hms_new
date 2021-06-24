import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ApiConfig } from '../constant/api';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/internal/operators'; 
import { User, UserFeedback } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `${ApiConfig.URL}${ApiConfig.USER}`;
  cityUrl = `${ApiConfig.URL}${ApiConfig.CITY}`
  stateUrl = `${ApiConfig.URL}${ApiConfig.STATE}`
  feedbackUrl = `${ApiConfig.URL}${ApiConfig.USERFEEDBACK}`
  public feedback: UserFeedback | undefined;
  public feedbackList: UserFeedback[] = []
  public user: User | undefined;
  public userList: User[] = [];
  modalSubject = new Subject();
  modalObservable = this.modalSubject.subscribe();

  constructor(private http: HttpClient) { }
  AddUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user).pipe(
      map(x => {
        this.userList.push(x);
        return user;
      }),
      catchError(this.handleError('', user))
    );
  }

  edit(id: number): User {
    return this.userList.find(i => i.id == id);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user).pipe(
      map(x => {
        // tslint:disable-next-line:prefer-const
        let index = this.userList.findIndex(i => i.id === x.id)
        this.userList[index] = x;
        return user;
      }),
      catchError(this.handleError('', user))
    );
  }
  deleteUserData(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`).pipe(
      catchError(this.handleError('', this.user)));
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map(x => {
        this.userList = x;
        return this.userList;
      })
    );
  }

  getFeedbacklist(): Observable<UserFeedback[]> {
    return this.http.get<UserFeedback[]>(this.feedbackUrl).pipe(
      map(x => {
        this.feedbackList = x;
        return this.feedbackList;
      })
    )
  }

  // getCities(): Observable<City[]> {
  //   return this.http.get<City[]>(this.cityUrl).pipe(
  //     map(x => {
  //       return x;
  //     })
  //   );
  // }

  // getStates(): Observable<City[]> {
  //   return this.http.get<City[]>(this.stateUrl).pipe(
  //     map(x => {
  //       return x;
  //     })
  //   );
  // }
  editEndUser(id: number): User {
    return this.userList.find(i => i.id === id);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      //  this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  postReview(feedback: UserFeedback): Observable<UserFeedback>{
    return this.http.post<UserFeedback>(`${this.feedbackUrl}`, feedback).pipe(
      map(x => {
        if(x!=null)
          this.feedbackList.push(x);
        return feedback;
      }),
      catchError(this.handleError('', feedback))
    );
  }
}
