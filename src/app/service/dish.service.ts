import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ApiConfig } from '../constant/api';
import { Dish, DishCategory, Product } from '../models/dish';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})

export class DishService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
  productNames: string[] = [
    "Bamboo Watch", 
    "Black Watch", 
    "Blue Band", 
    "Blue T-Shirt", 
    "Bracelet", 
    "Brown Purse", 
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
];

getProductsSmall() {
  return this.httpClient.get<any>('assets/products-small.json')
  .toPromise()
  .then(res => <Product[]>res.data)
  .then(data => { return data; });
}

getProducts() {
  return this.httpClient.get<any>('assets/products.json')
  .toPromise()
  .then(res => <Product[]>res.data)
  .then(data => { return data; });
}

getProductsWithOrdersSmall() {
  return this.httpClient.get<any>('assets/products-orders-small.json')
  .toPromise()
  .then(res => <Product[]>res.data)
  .then(data => { return data; });
}

generatePrduct(): Product {
  const product: Product =  {
      id: this.generateId(),
      name: this.generateName(),
      description: "Product Description",
      price: this.generatePrice(),
      quantity: this.generateQuantity(),
      category: "Product Category",
      inventoryStatus: this.generateStatus(),
      rating: this.generateRating()
  };

  product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
  return product;
}

generateId() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  
  return text;
}

generateName() {
  return this.productNames[Math.floor(Math.random() * Math.floor(30))];
}

generatePrice() {
  return Math.floor(Math.random() * Math.floor(299)+1);
}

generateQuantity() {
  return Math.floor(Math.random() * Math.floor(75)+1);
}

generateStatus() {
  return this.status[Math.floor(Math.random() * Math.floor(3))];
}

generateRating() {
  return Math.floor(Math.random() * Math.floor(5)+1);
}
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
    if(dish.mainCategoryId == 0 && dish.mainCategoryName !="" ){
      let category = new  DishCategory();
      category.name = dish.mainCategoryName; 
      this.httpClient.post<Dish>(this.categoryUrl, category).pipe(
        map(x => {
          console.log(x);          
        }),
        catchError(this.handleError('', dish))
      );
    }
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
    return this.httpClient.delete<Dish>(`${this.url}/${id}`).pipe(catchError(this.handleError))
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      //  this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


  edit(id: number): Dish {
    return this.dishList.find(i => i.id == id);
  }

  getList(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(this.url).pipe(
      map(x => {
        this.dishList = x;
        return this.dishList;
      })
    );
  }

  getDishCategory(): Observable<DishCategory[]> {
    return this.httpClient.get<DishCategory[]>(this.categoryUrl).pipe(
      map(x => {
        return x;
      })
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