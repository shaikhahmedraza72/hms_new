import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ApiConfig } from '../constant/api';
import { Dish, DishCategory } from '../models/dish';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/internal/operators'; 
@Injectable({
  providedIn: 'root'
})

export class DishService {

  // #region properties
    url = `${ApiConfig.URL}${ApiConfig.DISH}`;
    categoryUrl = `${ApiConfig.URL}${ApiConfig.DISHCATEGORY}`;

  public dish: Dish | undefined;
  public dishList: Dish[] = [];
  modalSubject = new Subject();
  modalObservable = this.modalSubject.subscribe();

  editModalSubject = new Subject<Dish>();
  editModalObservable = this.editModalSubject.subscribe();

  //#endregion properties

  //#region Constructor
  constructor(private httpClient: HttpClient) {
  }
  //#endregion Constructor

  //#region Method
  // Adding new data
  Add(dish: Dish): Observable<Dish> {
    return this.httpClient.post<Dish>(this.url, dish).pipe(
      map(x => {
        this.dishList.push(x);
        return dish;
      }),
      catchError(this.handleError('', dish))
    );
  }
  
  //updating exisiting data
  update(dish: Dish): Observable<Dish> {
    return this.httpClient.put<Dish>(`${this.url}/${dish.id}`, dish).pipe(
      map(x => {
        var index = this.dishList.findIndex(i => i.id == x.id)
        this.dishList[index] = x;
        return dish;
      }),
      catchError(this.handleError('', dish))
    );
  }

  deleteData(id: number): Observable<Dish> {
    return this.httpClient.delete<Dish>(`${this.url}/${id}`).pipe(
      catchError(this.handleError('', this.dish)))
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      //  this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

//edit the dish item
  edit(id: number): Dish {
    return this.dishList.find(i => i.id == id);
  }

  // get all dish list
  getList(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(this.url).pipe(
      map(x => {
        this.dishList = x;
        return this.dishList;
      })
    );
  }

  // get dishcategory list
  getDishCategory(): Observable<DishCategory[]> {
    return this.httpClient.get<DishCategory[]>(this.categoryUrl).pipe(
      map(x => {
        return x;
      })
    );
  }

  // add new dishcategory
  addDishCategory(CategoryItm:string): Observable<any>{
      
      let category = new DishCategory(); 
      category.name = CategoryItm;
      return this.httpClient.post<Dish>(this.categoryUrl, category).pipe(
        map(x => {
          console.log(x);          
        }),
        catchError(this.handleError('', CategoryItm))
      );
   
  }

  openModal() {
    this.modalSubject.next();
  }

  openEditModel(id: number) {
    var dish = this.dishList.find(i => i.id == id);
    console.log(id);
    console.log(dish)
    this.editModalSubject.next(dish);
  }
  //#endregion Method
}