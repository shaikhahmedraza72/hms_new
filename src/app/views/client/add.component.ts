  import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Client, ClientBankDetails, CLientCategory } from './../../models/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddClientComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;

  constructor(public clientSvc: ClientService) { }
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

  close() {
    this.largeModal.hide();
  }
  onSubmit(userForm: NgForm) {
    if (this.isEdit) {
      this.clientSvc.updateCLient(this.client).subscribe(resp => {
      });
    } else {
      this.clientSvc.AddClient(this.client).subscribe(resp => {
      });
    }
    userForm.resetForm();
    this.close();
  }

}
