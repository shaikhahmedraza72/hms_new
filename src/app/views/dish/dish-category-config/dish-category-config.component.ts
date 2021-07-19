import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Dish, DishCategory } from '../../../models/dish';
import { DishService } from '../../../service/dish.service';

@Component({
  selector: 'app-dish-category-config',
  templateUrl: './dish-category-config.component.html',
  styleUrls: ['./dish-category-config.component.scss']
})
export class DishCategoryConfigComponent implements OnInit {
  status: { label: string; value: string; }[];
  dishCategory: DishCategory;
  category: DishCategory;
  CategoryList: DishCategory[];
  categoryDialog: boolean;
  submitted: boolean;
  dishList: Dish[];
  dish: Dish;
  constructor(private categorySvc: DishService, private msgService: MessageService) { }

  ngOnInit(): void {
    this.status = [{ label: 'Active', value: 'active' },
    { label: 'InActive', value: 'inactive' }];
    this.loadCategory();
    this.loadData();
  }

  loadData() {
    this.categorySvc.getList().subscribe(res => {
      this.dishList = res;
    });
  }
  loadCategory(){
    this.categorySvc.getDishCategory().subscribe(x => {
      this.CategoryList = x;
      console.log(x);
    });
  }

  openNew() {
    this.submitted = false;
    this.categoryDialog = true;
  }
  hideDialog() {
    this.categoryDialog = false;
    this.submitted = false;
  }

  editDish(category: DishCategory) {
    this.category = { ...category };
    this.categoryDialog = true;
  }

  onSubmit(f){ 
    debugger;
    this.submitted = true;
    if (f.invalid) return;
    if (this.category.id) {
      this.CategoryList[this.findIndexById(this.category.id)] = this.category;
      this.categorySvc.update(this.dish).subscribe(() => {
        this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'Dish Updated', life: 3000 });
        this.loadData();
        this.loadCategory();
      });

    } else {
      this.category.id = this.CategoryList[this.CategoryList.length - 1].id + 1;
      this.dish.mainCategoryId = 1;
      this.categorySvc.addDishCategory(this.category).subscribe(() => {
          this.CategoryList.push(this.category);
          this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'Dish Created', life: 3000 });
          this.loadData();
          this.loadCategory();
      });


    }

    this.CategoryList = [...this.CategoryList];
    this.categoryDialog = false;
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
}
