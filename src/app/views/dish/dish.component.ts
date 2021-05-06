import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Dish } from '../../models/dish';
import { DishService } from '../../service/dish.service';

@Component({
  selector: 'dish-Component',
  templateUrl: './dish.component.html'
})
export class DishComponent implements OnInit {
  constructor(public dishSvc: DishService) { }
  dishList: Dish[] = [];
  dish: Dish;
  isChecked: boolean;
  btnDisable: boolean = false;
  selectedDish: number[] = [];
  displayModel = false;
  ngOnInit(): void {
    this.loadData();
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

  // onChkEdit(id){
  //   if(this.isChecked === true){
  //     this.selectedDish.push(id);
  //   } else {
  //     this.selectedDish.pop();
  //   }
  //   console.log(this.selectedDish); 

  // }
  onCheckboxChange(id, e) {
    this.btnDisable = false;
    // console.log(e.target.checked);
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

  onDelete() {
    if(this.selectedDish.indexOf(this.dish.id)){
      console.log(this.selectedDish);      
    }
      // this.dishSvc.deleteData(this.selectedDish.indexOf(this.dish.id));
      // console.log(this.selectedDish);
  }
}
