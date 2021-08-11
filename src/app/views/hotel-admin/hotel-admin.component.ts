import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ModalDirective } from 'ngx-bootstrap/modal'; 
import { Admin, Bankdetails } from '../../models/admin';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonService } from '../../service/common.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-hotel-admin',
  templateUrl: './hotel-admin.component.html',
  styleUrls: ['./hotel-admin.component.scss']
})
export class HotelAdminComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('f') form: any;
  admin: Admin;
  adminList: Admin[] = [];
  selectedAdmins: Admin[] = [];
  states: any;
  cities: any;
  adminDialog: boolean;
  submitted: boolean;
  dataId: number;
  constructor(
    public adminService: AdminService,
    private msgService: MessageService,
    private commonService: CommonService,
    private confirmationService: ConfirmationService
  ) {
    this.admin = new Admin();
    this.admin.bankDetails = new Bankdetails();
   }
   categories:any;
   isEdit: boolean;
  ngOnInit(): void {
    this.loadClient();
    this.getClientCategory();
    this.fnGetCitiesList();
    this.fnGetStatesList();
  }

  openNew() {
    // this.admin = {};
    this.submitted = false;
    this.adminDialog = true;
  }

  editAdmin(admin: Admin) {
    this.admin = { ...admin };
    this.adminDialog = true;
  }

  hideDialog() {
    this.adminDialog = false;
    this.submitted = false;
  }

  loadClient(){
    this.adminService.getClientList().subscribe(resp => {
      if(resp.length > 0){  
       const adminItm = resp.find(x => x.id == 10);
       this.admin = adminItm;
       
      }
    });
  }
  getClientCategory() {
    this.adminService.getClientCategory().subscribe(x => {
      this.categories = x.map(cItem => { 
        return { label:cItem.name, value:cItem.id}
         })  
    });
   
  }

  onSubmit(fData:any){
    debugger;
    if(fData.invalid) return;
    if(!this.admin.id){
      this.admin.id = this.adminList[this.adminList.length - 1].id + 1;
      this.adminService.AddClient(this.admin).subscribe(() => {
          this.msgService.add({severity:'success', summary: 'Successful', detail: 'Admin Details Added!', life: 3000});
          this.loadClient();  
          this.getClientCategory();
          this.fnGetCitiesList();
          this.fnGetStatesList();                                                                                                          
      });
    } else {
      this.adminList[this.findIndexById(this.admin.id)] = this.admin;
      this.adminService.updateCLient(this.admin).subscribe(() => {
        this.msgService.add({severity:'success', summary: 'Successful', detail: 'Admin Details Updated!', life: 3000});
        this.loadClient();
        this.getClientCategory();
        this.fnGetCitiesList();
        this.fnGetStatesList();
      });
    }
    
    this.adminList = [...this.adminList];
    this.adminDialog = false;
    this.dataId = this.admin.id;
  }

  fnGetCitiesList(){
    this.commonService.getCities().subscribe(x => {
      this.cities = x.map(cItem => {
        return { label: cItem.name, value: cItem.id }
      }) 
    });
  }
  fnGetStatesList(){
    this.commonService.getStates().subscribe(x => {
      this.states = x.map(cItem => {
        return { label: cItem.name, value: cItem.id }
      }) 
    });
  }

  findIndexById(id: number) {
    let index = -1;
    for (let i = 0; i < this.adminList.length; i++) {
      if (this.adminList[i].id == id) {
        index = i;
        break;
      }
    }

    return index;
  }


}
