import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishAddComponent } from './add.component';
import { DishComponent } from './dish.component';

const routes: Routes = [
  {
    path: '',
    component: DishComponent,
    data: {
      title: 'Dish Component'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule {}
