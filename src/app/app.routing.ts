import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientConfigComponent } from './views/client-config/client-config.component';
import { AddClientComponent } from './views/client/add.component';
import { TermsComponent } from './views/client/terms.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'AddClientComponent',
    component: AddClientComponent,
    data: {
      title: 'Add Client'
    }

  },
  {
    path: 'TermsComponent',
    component: TermsComponent,
    data: {
      title: 'Terms & Conditions'
    }
  },
  {
    path: 'ClientConfigComponent',
    component: ClientConfigComponent,
    data: {
      title: 'Client Configuration'
    }
  },
  // {
  //   path: '',
  //   component: DefaultLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    
      {
        path: 'dish',
        loadChildren: () => import('./views/dish/dish.module').then(m => m.DashboardModule)
      },
      {
        path: 'admin-config',
        loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'bankDetail',
        loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule)
      // },
    // ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [AddClientComponent, TermsComponent];
