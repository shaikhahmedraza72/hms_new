import { Component, OnInit } from '@angular/core';
import { scan } from 'rxjs/internal/operators';
import { Admin } from '../../../models/admin';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  stateOptions: any[];
  lblIsProceed: boolean;
  paymentMode: string;
  invoiceDialog: boolean;
  admin: Admin;
  adminList: Admin[] = [];
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(){
    this.adminService.getClientList().subscribe(resp => {
      if(resp.length > 0){  
       const adminItm = resp.find(x => x.id == x.id);
       this.admin = adminItm;    
      }
    });
  }
  fnCashProceed(v){
    this.paymentMode = "Cash"
    this.lblIsProceed = true;
  }
  fnUPIProceed(){
    this.paymentMode = 'UPI';
    this.lblIsProceed = true;
  }

  fnResetPayment(){
    this.paymentMode = null;
    this.lblIsProceed = false;
  }
  fnProceed(){
    if(this.paymentMode === 'Cash'){
      // alert('Payment Successful');
      this.invoiceDialog = true
    } else if(this.paymentMode === 'UPI'){
      alert('Please scan the QR code and proceed');
    }
  }
   
}
