import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { roleConfig } from '../../constant/rolesConfig';
import { AuthGuard } from '../../helpers/auth.guard';
import { AdminSettingComponent } from './admin-setting.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingComponent,
    data: {
      title: 'Admin config',
      roles: roleConfig.authRoles.sa
    },
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminRoutingModule {}