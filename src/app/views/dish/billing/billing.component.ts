import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  stateOptions: any[];
  lblIsProceed: boolean;
  paymentType: string;

  constructor() { this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];}
  value1: string = "off";

  ngOnInit(): void {
    console.log(this.value1);
  }
  fnCashProceed(v){
    this.paymentType = "Cash"
    this.lblIsProceed = true;
  }
  fnUPIProceed(){
    this.paymentType = 'UPI';
    this.lblIsProceed = true;
  }

  fnResetPayment(){
    this.paymentType = null;
    this.lblIsProceed = false;
  }
   
}
