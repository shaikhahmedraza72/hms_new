import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelAdminComponent } from './hotel-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HotelAdminComponent,
    data: {
      title: 'Hotel Admin'
    }
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class HotelAdminRoutingModule { }
