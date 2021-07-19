import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
import { DishComponent } from './dish.component';
import { DishCategoryConfigComponent } from './dish-category-config/dish-category-config.component';
const routes: Routes = [
  {
    path: '',
    component: DishComponent,
    data: {
      title: 'Dish Configuration'
    }
  },
  {
    path:'dish-menu',
    component:DishMenuComponent,
    data:{
      title:"Dish Menu"
    }
  },
  {
    path: 'dishCategoryConfig',
    component: DishCategoryConfigComponent,
    data: {
      title: 'Dish Category Config'
    }
  },
  {
    path:'checkout',
    component:CheckoutComponent,
    data:{
      title:"Checkout"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule {

}
