import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CommonModule } from "@angular/common";
import { AddClientComponent } from './add.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    ChartsModule,CommonModule,
    BsDropdownModule,HttpClientModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ AddClientComponent, ClientComponent ]
})
export class ClientModule { }