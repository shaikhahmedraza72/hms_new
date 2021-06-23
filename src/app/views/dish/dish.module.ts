import { NgModule } from '@angular/core';  
import { DishRoutingModule } from './dish-routing.module';
import { DishComponent } from './dish.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
import { SharedModule} from './../../shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    DishRoutingModule,    
  ],
  declarations: [DishComponent,DishMenuComponent ]
})
export class DashboardModule { }