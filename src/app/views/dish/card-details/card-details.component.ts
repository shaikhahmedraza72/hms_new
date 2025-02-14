import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
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
  @Output() fnBillingModal: EventEmitter<any> = new EventEmitter();
  constructor(private cartService: CartService,
    private msgService: MessageService) { }

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
  fnMakePayment(){
    this.fnBillingModal.emit();
    this.cartService.postOrder(this.cartItems).subscribe(() => {
      this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'Dish Updated', life: 30000 });
    })
  }
}
