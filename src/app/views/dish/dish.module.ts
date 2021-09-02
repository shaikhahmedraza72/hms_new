import { NgModule } from '@angular/core';  
import { DishRoutingModule } from './dish-routing.module';
import { DishComponent } from './dish.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
import { SharedModule} from './../../shared/shared.module';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DishCategoryConfigComponent } from './dish-category-config/dish-category-config.component';
import { BillingComponent } from './billing/billing.component'
// import { UserFormComponent }from '../user/user-form/user-form.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { UserFormModuleModule } from '../user/user-form/user-form-module.module';
import { UserModule } from '../user/user.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
@NgModule({
  imports: [
    SharedModule,
    DishRoutingModule,
    UserFormModuleModule,
    UserModule
  ],
  declarations: [DishComponent,DishMenuComponent, CardDetailsComponent, CheckoutComponent, DishCategoryConfigComponent, BillingComponent,InvoiceComponent, OrdersListComponent]
 
})
export class DishModule { }