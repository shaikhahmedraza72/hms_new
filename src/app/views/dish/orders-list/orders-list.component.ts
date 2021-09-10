import { Component, OnInit } from '@angular/core';
import { Dish } from '../../../models/dish';
import { DishService } from '../../../service/dish.service';
import { CartService } from '../../../service/cart.service';
import { ShoppingCart } from '../../../models/shopping-cart';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  dishList: ShoppingCart[];
  selectedDishes: Dish[];
  orderStatusDialog:boolean;
  constructor(private dishSvc: DishService,
    private orderService: CartService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    debugger;
    this.orderService.getOrder().subscribe(res => {
      this.dishList = res;
    });
  }
  fnViewOrder(){
    this.orderStatusDialog =true;
  }
  fnProcessing(){ 
  }
  fnShipping(){  
  }
  fnCompleted(){ 
  }
  fnCancelOrder(){

  }
}
