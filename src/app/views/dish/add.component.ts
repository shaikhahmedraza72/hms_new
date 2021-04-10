import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Dish } from '../../models/dish';
import { DishService } from '../../service/dish.service';
@Component({
  selector: 'dish-add',
  templateUrl: './add.component.html',
})
export class DishAddComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  constructor(public dishSvc: DishService) { }
  dish: Dish;
  isEdit: boolean;
  ngOnInit(): void {
    this.dish = new Dish();
    this.subscribeModalEvent()
  }


  subscribeModalEvent() {
    this.dishSvc.modalSubject.subscribe(any => {
      this.largeModal.show();
      this.isEdit = false;
    });
    this.dishSvc.editModalSubject.subscribe(dish => {
      this.dish =Object.assign({}, dish) ;
      this.isEdit = true;
    });
  }

  close() {
    this.largeModal.hide();
  }

  onSubmit(userForm: NgForm) {
    if (this.isEdit) {
      this.dishSvc.update(this.dish).subscribe(resp => {
      });
    }
    else {
      this.dishSvc.Add(this.dish).subscribe(resp => {
      });
    }
    userForm.resetForm();
    this.close();
  }
}
