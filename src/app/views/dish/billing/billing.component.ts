import { Component, OnInit } from '@angular/core';
import { scan } from 'rxjs/internal/operators';

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

  constructor() { }

  ngOnInit(): void {
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
