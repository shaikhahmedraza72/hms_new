import { Component, OnInit } from '@angular/core';
// import { Dish,Product } from '../../models/dish';
import { DishService } from '../../service/dish.service';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  // products: Product[];
	
	responsiveOptions;
  constructor(private productService: DishService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
    // this.productService.getProductsSmall().then(products => {
		// 	this.products = products;
		// });
    }

}
