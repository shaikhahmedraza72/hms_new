import { NgModule } from '@angular/core';
 
import { AddClientComponent } from './add.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { BankDetailsComponent } from '../client/bank-details.component';
import { TermsComponent } from '../client/terms.component';
import { EndUserComponent } from '../client/end-user/end-user.component'
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ClientRoutingModule,
  ],
  declarations: [ AddClientComponent, ClientComponent, BankDetailsComponent, TermsComponent, EndUserComponent ]
})
export class ClientModule { }