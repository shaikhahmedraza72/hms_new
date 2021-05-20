import { Component, OnInit } from '@angular/core';
import { Client, ClientBankDetails, CLientCategory } from './../../models/client';



interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-client-config',
  templateUrl: './client-config.component.html',
  styleUrls: ['./client-config.component.scss']
})
export class ClientConfigComponent implements OnInit {
  cities: City[];

    selectedCity: City;


  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

  ngOnInit(): void {
  }

  
  // client: Client = new Client();
  // categories: CLientCategory[] = [];
  // selectedCategories: CLientCategory;



}
