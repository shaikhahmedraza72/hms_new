import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ClientService } from '../../service/client.service';
import { Client, ClientBankDetails, CLientCategory } from './../../models/client';



interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-client-config',
  templateUrl: './client-config.component.html',
  styleUrls: ['./client-config.component.scss']
})
export class ClientConfigComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  constructor(public clientSvc: ClientService, public bankSvc: ClientService) { }
  client: Client = new Client();
  categories: CLientCategory[] = [];
  isEdit: boolean;
  bankDetaials: ClientBankDetails = new ClientBankDetails();


  ngOnInit(): void {
    this.client = new Client();
    this.subscribeModalEvent();
    this.getClientCategory();
  }

  getClientCategory() {
    this.clientSvc.getClientCategory().subscribe(x => {
      this.categories = x;
      console.log(this.categories)
    });
  }
  subscribeModalEvent() {
    this.clientSvc.modalSubjectForClient.subscribe(any => {
      this.largeModal.show();
      this.isEdit = false;
    });
    this.clientSvc.editModalSubject.subscribe(client => {
      this.client = Object.assign({}, this.client);
      this.isEdit = true;
    });
  }

  // close() {
  //   this.largeModal.hide();
  // }
  // onSubmit(userForm: NgForm) {
  //   if (this.isEdit) {
  //     this.clientSvc.updateCLient(this.client).subscribe(resp => {
  //     });
  //   } else {
  //     this.clientSvc.AddClient(this.client).subscribe(resp => {
  //     });
  //   }
  //   userForm.resetForm();
  //   this.close();
  // }

  onSubmit(value: any){
    console.log(value);
    this.clientSvc.AddClient(this.client).subscribe(resp => {
         });
         this.bankSvc.AddBankDetails(this.bankDetaials).subscribe(resp => {
        }); 
  }
  
  // client: Client = new Client();
  // categories: CLientCategory[] = [];
  // selectedCategories: CLientCategory;



}
