import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/admin';
import { ShoppingCart } from '../../models/shopping-cart';
import { AdminService } from '../../service/admin.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  public cartItems: ShoppingCart;

  admin: Admin;
    constructor( public adminService: AdminService,private cartService: CartService) { }
  

  ngOnInit(): void {
    this.loadClient();
    this.cartService.get().subscribe(resp=> this.cartItems = resp);
    console.log(this.cartItems.grossTotal);
  }

  loadClient(){
    this.adminService.getClientList().subscribe(resp => {
      if(resp.length > 0){  
       const adminItm = resp.find(x => x.id == x.id);
       this.admin = resp[1];  
      }
    });
  }
}
