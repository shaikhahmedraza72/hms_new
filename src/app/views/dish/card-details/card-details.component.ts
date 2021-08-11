import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../../../models/dish';
import { ShoppingCart } from '../../../models/shopping-cart';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  public cartItems: ShoppingCart;
  totCartPrice: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.get().subscribe(resp=> this.cartItems = resp); 
  }
  addItem(item){
    this.cartService.addItem(item,1);
  } 
  removeItem(item){
    this.cartService.addItem(item,-1)
  }
  emptyCart(){
    this.cartService.empty();
  }
}
