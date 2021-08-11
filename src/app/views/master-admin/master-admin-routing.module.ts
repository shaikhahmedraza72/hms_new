import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterAdminComponent } from './master-admin.component';

const routes: Routes = [
  {
    path: '',
    component: MasterAdminComponent,
    data : {
      title: 'Master Admin'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MasterAdminRoutingModule { }
