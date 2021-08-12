import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../models/shopping-cart';
import { User } from '../../../models/user';
import { AuthService } from '../../../service/auth.service';
import { CartService } from '../../../service/cart.service';
import { StorageService } from '../../../service/storage.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public cartItems: ShoppingCart;
  storage: Storage;
  totCartPrice: any;
  user: any;
  submitted: boolean;
  userDialog: boolean;
  userData: any;
  users: { label: string, value: string}[];
  selectedUser: string;

    
    constructor(private cartService: CartService, private authServive: AuthService,private storageService: StorageService,public userSvc: UserService) { }
  

  ngOnInit(): void {
    this.cartService.get().subscribe(resp=> this.cartItems = resp); 
    this.userData = this.authServive.userData();
    // JSON.parse(this.storage.getItem('HMSUserData'));  
    this.loadData() 
    console.log(this.userData);
  }
  
  loadData() {
    this.userSvc.getUserList().subscribe(res => {
      this.users = res.map(Item => {
        return {label: Item.userName, value: Item.userName};
      });
    });
  }
  fnCompleteOrder(){
    this.cartService.empty();
    alert("Thank you for your order, it will be dispatched shortly!")
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

}
