import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
 
import { DishComponent } from './dish.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule {

}
