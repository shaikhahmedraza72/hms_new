import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-setting',
  templateUrl: './hotel-setting.component.html',
  styleUrls: ['./hotel-setting.component.scss']
})
export class HotelSettingComponent implements OnInit {
  currentView:string = "advTblBooking";
  tableList:Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.tableList = [
      {
        name:'Table 1',
        isBooked:false,
        seats:4
      },
      {
        name:'Table 2',
        isBooked:false,
        seats:4
      },
      {
        name:'Table 3',
        isBooked:false,
        seats:4
      },
      {
        name:'Table 4',
        isBooked:false,
        seats:4
      },{
        name:'Table 5',
        isBooked:false,
        seats:4
      }
      ,{
        name:'Table 6',
        isBooked:false,
        seats:4
      },
      {
        name:'Table 7',
        isBooked:false,
        seats:4
      },
      {
        name:'Table 8',
        isBooked:false,
        seats:6
      },
      {
        name:'Table 9',
        isBooked:false,
        seats:6
      },
      {
        name:'Table 10',
        isBooked:false,
        seats:6
      },
      {
        name:'Table 11',
        isBooked:false,
        seats:10
      },{
        name:'Table 12',
        isBooked:false,
        seats:10
      },
      {
        name:'Table 13',
        isBooked:false,
        seats:10
      },
      {
        name:'Table 14',
        isBooked:false,
        seats:10
      },
      {
        name:'Table 15',
        isBooked:false,
        seats:10
      },

  ] 
  }

  fnTblBook(tblItem){ 
    this.tableList.map(res => { 
        if(res.name === tblItem.name ){
          res.isBooked = true;
        }
      });
  }
}
