import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  selectedCategory: any = null;
  categories: any[] = [{name: 'Cash', key: 'C'}, {name: 'UPI', key: 'U'}];

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedCategory);
  }

}
