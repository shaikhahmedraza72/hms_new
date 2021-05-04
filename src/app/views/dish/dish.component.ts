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
  isChecked: boolean;
  selectedDish: number[] = [];
  displayModel = false;
  ngOnInit(): void {
    this.loadData();
  }
  showModel() {
    this.dishSvc.openModal();
  }
  edit(id: number) {
    this.dishSvc.openModal();
    this.dishSvc.openEditModel(id);
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
    console.log(e.target.checked);
    if (e.target.checked) {
      if (this.selectedDish.indexOf(id) == -1) {
        this.selectedDish.push(id);
      }
    } else {
      const index = this.selectedDish.indexOf(id, 0);
      if (index > -1) {
        this.selectedDish.splice(index, 1);
      }
    }
    console.log(this.selectedDish);
  }


  onDelete() {
    if (this.selectedDish) {
      this.selectedDish.pop();
    }
  }
}
