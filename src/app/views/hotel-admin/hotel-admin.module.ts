import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HotelAdminComponent } from './hotel-admin.component';
import { HotelAdminRoutingModule } from './hotel-admin-routing.module';


@NgModule({
  declarations: [HotelAdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    HotelAdminRoutingModule
  ]
})
export class HotelAdminModule { }
