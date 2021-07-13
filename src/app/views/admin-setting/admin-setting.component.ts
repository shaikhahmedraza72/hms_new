import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ModalDirective } from 'ngx-bootstrap/modal'; 
import { Admin, Bankdetails } from '../../models/admin';
import { MessageService } from 'primeng/api';
import { CommonService } from '../../service/common.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss']
})
export class AdminSettingComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('f') form: any;
  admin: Admin;
  states: any;
  cities: any;
  selectedCategory:any;
  constructor(
    public adminService: AdminService,
    private msgService: MessageService,
    private commonService: CommonService
    ) { 
    this.admin = new Admin();
    this.admin.bankDetails = new Bankdetails();
   }
  
  categories:any;
  isEdit: boolean;

  // bankDetaials: ClientBankDetails = new ClientBankDetails();

  ngOnInit(): void { 
    this.adminService.getClientList().subscribe(resp => {
      if(resp.length > 0){  
       const adminItm = resp[resp.length-1];
        adminItm.id = 1;
       this.admin = adminItm;
       this.admin.categoryId = 2;
       console.log(this.admin )
       this.selectedCategory = this.admin.categoryId // { label:'business1', value:1};
      }
    })
    this.getClientCategory();
    this.fnGetCitiesList();
    this.fnGetStatesList();
  }

  getClientCategory() {
    const cArray = [];
    this.adminService.getClientCategory().subscribe(x => {
      this.categories = x.map(cItem => { 
        return { label:cItem.name, value:cItem.name}
         })  
    });
   
  }

  onSubmit(fData:any){
    debugger;
    if(fData.invalid) return;
    let f = fData.value ;
    if(!this.admin.id){
      this.adminService.AddClient(f).subscribe(resp => {
        if(resp){
          this.msgService.add({severity:'success', summary: 'Successful', detail: 'Admin Details Added!', life: 3000});
        }
      });
    } else { 
      f.id = this.admin.id;
      this.adminService.updateCLient(f).subscribe(resp => {
        this.msgService.add({severity:'success', summary: 'Successful', detail: 'Admin Details Updated!', life: 3000});

      });
    } 
  }

  fnGetCitiesList(){
    // if(this.admin.category){
      
    // }
    this.commonService.getCities().subscribe(x => {
      this.cities = x.map(cItem => {
        return { label: cItem.name, value: cItem.name }
      }) 
    });
  }
  fnGetStatesList(){
    this.commonService.getStates().subscribe(x => {
      this.states = x.map(cItem => {
        return { label: cItem.name, value: cItem.name }
      }) 
    });
  }

}
