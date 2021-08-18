import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from './../../shared/shared.module'
import { UserConfigComponent } from './user-config/user-config.component'
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { UserFormModuleModule } from '../user/user-form/user-form-module.module'
@NgModule({
  declarations: [UserConfigComponent, UserFeedbackComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    UserFormModuleModule
  ]
})
export class UserModule { }
