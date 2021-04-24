import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CommonModule } from "@angular/common";
import { DishAddComponent } from './add.component';
import { DishRoutingModule } from './dish-routing.module';
import { DishComponent } from './dish.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DishRoutingModule,
    ChartsModule, CommonModule,
    BsDropdownModule, HttpClientModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ DishAddComponent, DishComponent ]
})
export class DashboardModule { }