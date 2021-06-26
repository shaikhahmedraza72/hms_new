import { Component, OnInit } from '@angular/core';
import { Client, ClientBankDetails, EndUser } from '../../models/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {

  constructor(private clientSvc: ClientService, private bankSvc: ClientService, private endUserSvc: ClientService) { }
  clientList: Client[] = [];
  submitted: boolean;
  clientDialog: boolean;
  detailList: ClientBankDetails[] = [];
  endUserList: EndUser [] = [];
  displayModel = false;
  ngOnInit(): void {
    this.loadData();
    this.loadBankData();
    this.loadEndUserData();
  }
  showModel() {
    this.clientSvc.openModalForClient();
  }
  openNew() {
    this.submitted = false;
    this.clientDialog = true;
}
  edit(id: number) {
    this.clientSvc.openModalForClient();
    this.clientSvc.openEditModelForClient(id);
  }
  loadData() {
    this.clientSvc.getClientList().subscribe(res => {
      this.clientList = res;
    });
  }

  loadBankData() {
    this.bankSvc.getBankDetailList().subscribe(res => {
      this.detailList = res;
    });
  }
 
  loadEndUserData() {
  this.endUserSvc.getEndUserList().subscribe(res => {
    this.endUserList = res;
  });
}
}