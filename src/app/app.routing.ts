import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from 'rxjs';
import { roleConfig } from './constant/rolesConfig';
import { AuthGuard } from './helpers/auth.guard';
import { AdminSettingComponent } from './views/admin-setting/admin-setting.component';
import { ClientConfigComponent } from './views/client-config/client-config.component';
import { BillingComponent } from './views/dish/billing/billing.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { HotelAdminComponent } from './views/hotel-admin/hotel-admin.component';
import { LoginComponent } from './views/login/userLogin.component'; 
import { RegisterComponent } from './views/register/register.component'; 

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
      roles: roleConfig.authRoles.guest
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
      roles: roleConfig.authRoles.guest
    }
  },
  {
    path: 'dish',
    loadChildren: () => import('./views/dish/dish.module').then(m => m.DashboardModule),
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'admin-setting',
    component: AdminSettingComponent,
    data: {
    roles: roleConfig.authRoles.sa
    },
    canActivate: [AuthGuard]

  }, 
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
          roles: roleConfig.authRoles.guest
        },
    canActivate: [AuthGuard]
      },
      {
        path: 'hotel-admin',
        component: HotelAdminComponent,
    data: {
          roles: roleConfig.authRoles.admin
        },
    canActivate: [AuthGuard]
      },
      {
        path: 'bankDetail',
        loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule)
  },
    {
        path: 'users',
        loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
     
      },
      {
        path: '404',
        component: P404Component,
        data: {
          title: 'Page 404',
          roles: roleConfig.authRoles.guest
        }
      },
      {
        path: '500',
        component: P500Component,
        data: {
          title: 'Page 500',
          roles: roleConfig.authRoles.guest
        }
  },
  {
    path: '',
    redirectTo: '/dish/dish-menu',
    pathMatch: 'full',

      },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [];
