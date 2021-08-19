import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { Dish, DishCategory } from '../../../models/dish';
import { User } from '../../../models/user';
import { AuthService } from '../../../service/auth.service';
import { CartService } from '../../../service/cart.service';
import { CommonService } from '../../../service/common.service';
import { DishService } from '../../../service/dish.service';
import { UserService } from '../../../service/user.service';

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
  cities: any;
  states: any;
  selectedUser: string;
  userList: User[];
  userDialog: boolean;
  submitted: boolean;
  user: any;
  userData: any; 
  billingDialog: boolean;
  users: { label: number, value: number }[];
  constructor(
    private dishService: DishService, 
    private primengConfig: PrimeNGConfig,
    private cartService:CartService,
    public commonSvc: CommonService,
    private msgService: MessageService,
    public userSvc: UserService,
    private authServive: AuthService) { }

  ngOnInit() {
      this.dishService.getList().subscribe(data => this.dishes = data);

      this.sortOptions = [
          {label: 'Price High to Low', value: '!fullPrice'},
          {label: 'Price Low to High', value: 'fullPrice'}
      ];

      this.userData = this.authServive.userData(); 
      this.primengConfig.ripple = true;
      this.fnGetDishCategoy();
      this.loadData()
      this.getCities();
      this.getStates();
  }
  
  loadData() {
    this.userSvc.getUserList().subscribe(res => {
      this.user = res.map(CItem => {
        return { label: CItem.contact, value: CItem.contact}
      })
    });
  }
  getCities() {
    this.commonSvc.getCities().subscribe(x => {
      this.cities = x.map(cItem => {
        return { label: cItem.name, value: cItem.id }
      })
    });
  }
  getStates() {
    this.commonSvc.getStates().subscribe(x => {
      this.states = x.map(cItem => {
        return { label: cItem.name, value: cItem.id }
      })
    });
  }
  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }
  saveUser() {
    debugger;
    this.submitted = true;
    console.log(this.user);
    if (this.user.userName.trim()) {
      this.userSvc.AddUser(this.user).subscribe(() => {
        this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'user Created', life: 3000 });
      })
    }
    this.userDialog = false;
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
    this.cartService.addItem(cartItem,1);
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
  fnMakePayment(){
    this.billingDialog = true;
  }
}
