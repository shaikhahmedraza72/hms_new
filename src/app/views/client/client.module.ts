import { NgModule } from '@angular/core'; 
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component'; 

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ClientRoutingModule,
  ],
  declarations: [ ClientComponent ]
})
export class ClientModule { }