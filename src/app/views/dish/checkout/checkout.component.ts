import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../models/shopping-cart';
import { AuthService } from '../../../service/auth.service';
import { CartService } from '../../../service/cart.service';
import { StorageService } from '../../../service/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public cartItems: ShoppingCart;
  storage: Storage;
  totCartPrice: any;
  userData: any;

  constructor( private cartService: CartService, private authServive: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.cartService.get().subscribe(resp => this.cartItems = resp);
    this.userData = this.authServive.userData(); 
  }

  fnCompleteOrder() {
    this.cartService.empty();
    alert("Thank you for your order, it will be dispatched shortly!")
  }

}




