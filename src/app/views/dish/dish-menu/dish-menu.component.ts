import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Dish, DishCategory } from '../../../models/dish';
import { CartService } from '../../../service/cart.service';
import { DishService } from '../../../service/dish.service';

@Component({
  selector: 'app-dish-menu',
  templateUrl: './dish-menu.component.html',
  styleUrls: ['./dish-menu.component.scss']
})
export class DishMenuComponent implements OnInit {
  dishes: Dish[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;
  dishCategory: { label: string; value: string; }[];
  cartItems: Array<any> = [];

  constructor(
    private dishService: DishService, 
    private primengConfig: PrimeNGConfig,
    private cartService:CartService) { }

  ngOnInit() {
      this.dishService.getList().subscribe(data => this.dishes = data);

      this.sortOptions = [
          {label: 'Price High to Low', value: '!fullPrice'},
          {label: 'Price Low to High', value: 'fullPrice'}
      ];

      this.primengConfig.ripple = true;
      this.fnGetDishCategoy();
  }
  
  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }
  // Get Category
  fnGetDishCategoy() {
    this.dishService.getDishCategory().subscribe((x:DishCategory[]) => {
      this.dishCategory = x.map(cItem => { 
        return { label:cItem.name, value:cItem.name}
         }) 
    });
  }
  onCategoryChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = -1;
        this.sortField = value;
    }
}
  // Bookmark the menu Item

  fnBookmarkMenu(dish:Dish){
      dish.bookmark =  !dish.bookmark;
  }
  
  //Add to cart Function
  fnAddtoCart(cartItem:Dish){
    this.cartService.addItem(cartItem,1)
  //   if(this.cartItems.length > 0) { 
  //   this.cartItems.push({Id:cartItem.id,price:cartItem.fullPrice,name:cartItem.name,quantity:1})

  // } else {
  //   this.cartItems.push({Id:cartItem.id,price:cartItem.fullPrice,name:cartItem.name, quantity:1})

  // }

  
}
  fnGetTotal(){
  const totVal = (accumulator:any, curVal:any) => accumulator + curVal.price;
  return this.cartItems.reduce(totVal);
  }
}
