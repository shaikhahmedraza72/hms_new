import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Dish } from '../../../models/dish';
import { DishService } from '../../../service/dish.service';

@Component({
  selector: 'app-dish-menu',
  templateUrl: './dish-menu.component.html',
  styleUrls: ['./dish-menu.component.scss']
})
export class DishMenuComponent implements OnInit {
  dishes: Dish[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private dishService: DishService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.dishService.getList().subscribe(data => this.dishes = data);

      this.sortOptions = [
          {label: 'Price High to Low', value: '!price'},
          {label: 'Price Low to High', value: 'price'}
      ];

      this.primengConfig.ripple = true;
  }
  
  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

}
