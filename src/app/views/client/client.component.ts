import { Component, OnInit } from '@angular/core';
import { Client, ClientBankDetails } from '../../models/client';
import { BankDetailsService } from '../../service/bank-details.service';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {

  constructor(private clientSvc: ClientService, private bankSvc: BankDetailsService) { }
  clientList: Client[] = [];
  detailList: ClientBankDetails [] = [];
  displayModel=false;
  ngOnInit(): void {
    this.loadData();
    this.loadBankData();
  }
  showModel(){
    this.clientSvc.openModal();
  }
  edit(id:number){
    this.clientSvc.openModal();
    this.clientSvc.openEditModel(id);
  }
  loadData(){
    this.clientSvc.getList().subscribe(res=>{
      this.clientList = res;
     });
  }

  loadBankData(){
    this.bankSvc.getList().subscribe(res=>{
      this.detailList = res;
     });
  }
}
