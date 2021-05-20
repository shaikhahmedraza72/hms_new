import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Dish, DishCategory } from '../../models/dish';
import { DishService } from '../../service/dish.service';

@Component({
  selector: 'dish-add',
  templateUrl: './add.component.html',
})

export class DishAddComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  constructor(public dishSvc: DishService) { }
  test : boolean = true;

  dish: Dish;
  public checked = true;
  isEdit: boolean;
  categories : DishCategory[]=[];
  categoryId:number = 0;
  isChecked: boolean;
  
  ngOnInit(): void {
    this.dish = new Dish();
    this.dish.isFull = true;
    this.dish.isHalf = true;
    this.dish.isVeg = false;
    this.dish.mainCategoryId = 0;
    this.subscribeModalEvent();
    this.getDishCategory();
  }
   
   getDishCategory(){
     this.dishSvc.getDishCategory().subscribe(x=>{
        this.categories = x;
        console.log(this.categories)
     });
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
  onCategoryClicked(){
    this.dish.mainCategoryName = "";
  }
  newCategoryfocusOut(){
    if(this.dish.mainCategoryName !="" )
       this.dish.mainCategoryId = 0;
  }

  resetForm(dishform: NgForm){
    dishform.reset();
    this.dish.mainCategoryId = 0;
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
  chkHalfevent(){
    if(!this.dish.isHalf)
    this.dish.halfPrice = null;
  }
  chkFullevent(){
    if(!this.dish.isFull)
    this.dish.fullPrice = null;
  }
  checkClicked(val){
    if(val){
      this.test = false;
    } else{
      this.test = true;
    }
    console.log(val);
  }
}
