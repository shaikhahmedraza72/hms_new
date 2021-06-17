import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterAdmin } from '../../models/masterAdmin';
import { MasterAdminModule } from './master-admin.module';
import { MasterAdminService } from '../../service/master-admin.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-master-admin',
  templateUrl: './master-admin.component.html',
  styleUrls: ['./master-admin.component.scss']
})
export class MasterAdminComponent implements OnInit {
  @ViewChild('f') form: any;
  masterAdmin: MasterAdmin;
  masterAdminList: MasterAdmin[] = [];
  constructor(
    public mAdminSvc: MasterAdminService,
    public msgService: MessageService
  ) { }

  ngOnInit(): void {
    this.masterAdmin = {adminEmail: '', adminPassword: '', adminContact: 7666478757}; 
    this.mAdminSvc.getAdminDetails().subscribe(res => {
      if(res.length > 0){
        const mAdmin = res[res.length - 1];
        mAdmin.id = 1;
        this.masterAdmin = mAdmin;
      }
    })
  }

  onSubmit(val: any){
    console.log(this.masterAdmin);
    if(val.invalid) return;
    let v = val.value;
    if(!this.masterAdmin.id){
      this.mAdminSvc.addAdmin(val).subscribe(res => {
        if(res){
          this.msgService.add({severity:'success', summary: 'Successful', detail: 'Admin Details Added!', life: 3000});
        }
      });
    }
    else {
      v.id = this.masterAdmin.id;
      this.mAdminSvc.updateAdmin(val).subscribe(res => {
        if(res){
          this.msgService.add({severity:'success', summary: 'Successful', detail: 'Admin Details Updated!', life: 3000});
        }
      })
    }
  }

}
