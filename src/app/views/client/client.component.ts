import { Component, OnInit } from '@angular/core';
import { Client, ClientBankDetails } from '../../models/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {

  constructor(private clientSvc: ClientService, private bankSvc: ClientService) { }
  clientList: Client[] = [];
  detailList: ClientBankDetails[] = [];
  displayModel = false;
  ngOnInit(): void {
    this.loadData();
    this.loadBankData();
  }
  showModel() {
    this.clientSvc.openModalForClient();
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
}
