import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Dish } from '../../models/dish';
import { DishService } from '../../service/dish.service';

@Component({
  selector: 'dish-Component',
  templateUrl: './dish.component.html'
})
export class DishComponent implements OnInit {

  constructor(public dishSvc: DishService ) { }
  dishList:Dish[] = [];
  displayModel=false;
  ngOnInit(): void {
    this.loadData();
  }
  showModel(){
    this.dishSvc.openModal();
  }
  edit(id:number){
    this.dishSvc.openModal();
    this.dishSvc.openEditModel(id);
  }
  loadData(){
    this.dishSvc.getList().subscribe(res=>{
      this.dishList = res;
     });
  }

}
