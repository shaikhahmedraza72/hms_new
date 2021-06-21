import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AdminSettingComponent } from '../admin-setting/admin-setting.component'
import { adminRoutingModule } from '../admin-setting/adminRouting.module'
@NgModule({
  declarations: [AdminSettingComponent],
  imports: [
    CommonModule,
    SharedModule,
    adminRoutingModule
  ]
})
export class AdminModule { }
