import { Component, OnInit, ViewChild } from '@angular/core';
// import { ModalDirective } from 'ngx-bootstrap/modal';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Dish } from '../../models/dish';
import { DishService } from '../../service/dish.service';

@Component({
  selector: 'dish-Component',
  templateUrl: './dish.component.html',
  styleUrls:['./dish.component.scss']
})
export class DishComponent implements OnInit {
  dishDialog: boolean;
  statuses: { label: string; value: string; }[];

  constructor(public dishSvc: DishService, private confirmationService: ConfirmationService, private msgService: MessageService) { }
  dishList: Dish[] = [];
  dish: Dish;
  isChecked: boolean;
  btnDisable: boolean = false;
  selectedDishes: Dish[];
  selectedDish: number[] = [];
  displayModel = false;
  submitted:boolean;
  ngOnInit(): void {
    this.loadData();
    this.statuses = [  {label: 'Active', value: 'active'},
    {label: 'InActive', value: 'inActive'},]
  }
  showModel() {
      this.dishSvc.openModal();
  }
  edit() {
    if(this.selectedDish.length === 1){
      console.log(this.dishList);
    }
    this.dishSvc.openModal();
    this.dishSvc.openEditModel(this.selectedDish[0]);
  }
  loadData() {
    this.dishSvc.getList().subscribe(res => {
      this.dishList = res;
    });
  }

  
  openNew() {
    //this.dish = '';
    this.submitted = false;
    this.dishDialog = true;
}
editDish(dish: Dish) {
  this.dish = {...dish};
  this.dishDialog = true;
}

deleteDish(dish: Dish) {
  debugger
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + dish.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.dishList = this.dishList.filter(val => val.name !== dish.name);
          // this.dish;
          this.msgService.add({severity:'success', summary: 'Successful', detail: 'Dish Deleted', life: 3000});
      }
  });
}
deleteSelectedDishes() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected dishes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.dishList = this.dishList.filter(val => !this.selectedDishes.includes(val));
          this.selectedDishes = null;
          this.msgService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
  });
}


hideDialog() {
  this.dishDialog = false;
  this.submitted = false;
}

saveDish() {
  this.submitted = true;

  if (this.dish.name.trim()) {
      if (this.dish.id) {
          this.dishList[this.findIndexById(this.dish.id)] = this.dish;                
          this.msgService.add({severity:'success', summary: 'Successful', detail: 'Dish Updated', life: 3000});
      }
      else {
          this.dish.id = this.dishList[this.dishList.length].id + 1;
          this.dish.imageUrl = 'product-placeholder.svg';
          this.dishList.push(this.dish);
          this.msgService.add({severity:'success', summary: 'Successful', detail: 'Dish Created', life: 3000});
      }

      this.dishList = [...this.dishList];
      this.dishDialog = false;
      // this.d = {};
  }
}

findIndexById(id: number) {
  let index = -1;
  for (let i = 0; i < this.dishList.length; i++) {
      if (this.dishList[i].id == id) {
          index = i;
          break;
      }
  }

  return index;
}

createId(): string {
  let id = '';
  var chars = '0123456789';
  for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
  onCheckboxChange(id, e) {
    this.btnDisable = false;
     if (e.target.checked) {
      if (this.selectedDish.indexOf(id) === -1) {
        this.selectedDish.push(id);
      }
    } else {
      const index = this.selectedDish.indexOf(id, 0);
      if (index > -1) {
        this.selectedDish.splice(index, 1);
      }
    }
    if(this.selectedDish.length > 1){
      this.btnDisable = true;
    }
  }
}
