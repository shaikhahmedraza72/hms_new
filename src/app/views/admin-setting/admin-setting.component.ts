import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Client, ClientBankDetails, CLientCategory } from './../../models/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss']
})
export class AdminSettingComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;

  constructor(public clientSvc: ClientService) { }
  client: Client = new Client();
  categories:any;
  isEdit: boolean;

  bankDetaials: ClientBankDetails = new ClientBankDetails();

  ngOnInit(): void {
    // this.client = {};
    this.clientSvc.getClientList().subscribe(resp => {
      if(resp.length > 0){
        this.client = resp[resp.length-1]
      }
    })
    this.subscribeModalEvent();
    this.getClientCategory();
  }

  getClientCategory() {
    const cArray = [];
    this.clientSvc.getClientCategory().subscribe(x => {
      this.categories = x.map(cItem => { 
        return { label:cItem.name, value:cItem.name}
         }) 
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
  saveAdmin(d){
    console.log('CLIENTDATA', d)
    if(!d.id){
      this.clientSvc.AddClient(d).subscribe(resp => {

      });
    } else { 
      this.clientSvc.updateCLient(d).subscribe(resp => {

      });
    }
    
  }


}
