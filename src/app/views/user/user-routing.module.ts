import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserConfigComponent } from './user-config/user-config.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';

const routes: Routes = [
  {
    path:'',component:UserConfigComponent, data:{
      title:"User Configuration"
    }
  },
  {
    path:'user-feedback', component:UserFeedbackComponent, data:{
      title:"User Feedback"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
