import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../models/shopping-cart';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public cartItems: ShoppingCart;
  totCartPrice: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.get().subscribe(resp=> this.cartItems = resp); 
  }
  
  fnCompleteOrder(){
    this.cartService.empty();
    alert("Thank you for your order, it will be dispatched shortly!")
  }

}
