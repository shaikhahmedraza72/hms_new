import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  stateOptions: any[];

  constructor() { this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];}
  value1: string = "off";

  ngOnInit(): void {
    console.log(this.value1);
  }

}
