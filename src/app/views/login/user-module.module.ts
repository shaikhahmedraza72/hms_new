import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from './../../shared/shared.module';
import { LoginComponent } from '../login/userLogin.component';
import { UserLoginRoutingModule } from '../login/user-login-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserLoginRoutingModule
  ]
})
export class UserModuleModule { }
