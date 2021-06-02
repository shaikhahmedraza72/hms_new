export interface Dish {
    id?: number;
    name?: string;
    description?: string ;
    halfPrice?: number;
    fullPrice?: number;
    qty?: number;
    image?: any;
    mainCategoryId?: number;
    mainCategoryName?: string;
    newCategory?: string;
    isVeg?:boolean;
    isHalf?:boolean;
    isFull?:boolean;
    imageUrl?:any;
    nonVegCategory?:string;
    serviceTime?: any;
    
  }
  
  export class DishCategory{
      public id? : number;
      public name!: string;
      public description: string | undefined;
      constructor(
          ) { }
  }
  export interface Product {
    id?:string;
    code?:string;
    name?:string;
    description?:string;
    price?:number;
    quantity?:number;
    inventoryStatus?:string;
    category?:string;
    image?:string;
    rating?:number;
}
 
  