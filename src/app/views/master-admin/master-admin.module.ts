import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from './../../shared/shared.module';
import { MasterAdminComponent } from '../master-admin/master-admin.component';
import { MasterAdminRoutingModule } from '../master-admin/master-admin-routing.module'

@NgModule({
  declarations: [MasterAdminComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    MasterAdminRoutingModule
  ]
})
export class MasterAdminModule { }
