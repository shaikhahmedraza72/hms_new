import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
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
  selectedCategories: Dish[];
  categoryDialog: boolean;
  submitted: boolean;
  dishList: Dish[];
  dish: Dish;
  constructor(private categorySvc: DishService, private msgService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.status = [{ label: 'Active', value: 'active' },
    { label: 'InActive', value: 'inactive' }];
    // this.dishCategory = {};
    this.loadCategory();
  }
  loadCategory(){
    this.categorySvc.getDishCategory().subscribe(x => {
      this.CategoryList = x;
      console.log(x);
    });
  }

  openNew() {
    this.category = new DishCategory();
    this.submitted = false;
    this.categoryDialog = true;
  }
  hideDialog() {
    this.categoryDialog = false;
    this.submitted = false;
  }

  editDish(category: DishCategory) {
    this.category = {...category };
    this.categoryDialog = true;
  }
    //to delete dish item 
    deleteCategory(category: DishCategory) {
      this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + category.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.categorySvc.deleteCategoryData(category.id).subscribe(() => {
              this.CategoryList = this.CategoryList.filter(val => val.id !== category.id);
              this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'Category Deleted', life: 3000 });
          })
        }
      });
    }

  onSubmit(f){
    this.submitted = true;
    if (f.invalid) return;
    if (this.category.id) {
      // this.CategoryList[this.findIndexById(this.category.id)] = this.category;
      // this.category.gstCompliance = Number(this.category.gstCompliance);
      this.categorySvc.updateDishCategory(this.category).subscribe(() => {
        this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'Dish Updated', life: 3000 });
        this.loadCategory();
      });

    } else {
      // this.category.id = this.CategoryList[this.CategoryList.length - 1].id + 1;
      // this.dish.mainCategoryId = 1;
      this.categorySvc.addDishCategory(this.category).subscribe(() => {
          this.CategoryList.push(this.category);
          this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'Dish Created', life: 3000 });
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
