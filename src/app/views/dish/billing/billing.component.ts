import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  stateOptions: any[];
  lblIsProceed: boolean;
  paymentMode: string;

  constructor() { this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];}
  value1: string = "off";

  ngOnInit(): void {
    console.log(this.value1);
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
   
}
