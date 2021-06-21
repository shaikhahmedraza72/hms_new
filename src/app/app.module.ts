import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
// import { LoginComponent } from './views/login/userLogin.component';
import { RegisterComponent } from './views/register/register.component';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
  
} from '@coreui/angular';

// Import routing module
// import { AppRoutingModule, routingComponents } from './app.routing';

// Import 3rd party components
import { SharedModule } from './shared/shared.module'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule,  routingComponents} from './app.routing';
import { ClientConfigComponent } from './views/client-config/client-config.component';
import { AdminSettingComponent } from './views/admin-setting/admin-setting.component';
import { MasterAdminModule } from '../app/views/master-admin/master-admin.module';
// import { UserModuleModule } from '../app/views/login/user-module.module';
// import { MasterAdminComponent } from './views/master-admin/master-admin.component'; 

// import { SearchFilterPipe } from './helpers/search-filter.pipe';

// import { EndUserComponent } from './views/client/end-user/end-user.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MasterAdminModule,
   
  ],
  declarations: [
    AppComponent, 
    P404Component,
    P500Component,
    // LoginComponent,
    RegisterComponent,
    routingComponents,
    ClientConfigComponent,
    AdminSettingComponent,
    
    // MasterAdminComponent

   // EndUserComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
