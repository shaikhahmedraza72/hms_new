import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {

  constructor(private clientSvc: ClientService) { }
  clientList: Client[] = [];
  displayModel=false;
  ngOnInit(): void {
    this.loadData();
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
}
