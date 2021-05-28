import { NgModule } from '@angular/core'; 

import { DishAddComponent } from './add.component';
import { DishRoutingModule } from './dish-routing.module';
import { DishComponent } from './dish.component';
import { SharedModule} from './../../shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    DishRoutingModule,
    
  ],
  declarations: [ DishAddComponent, DishComponent ]
})
export class DashboardModule { }