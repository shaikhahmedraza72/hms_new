export class Dish {
    public id?: number;
    public name!: string;
    public description: string | undefined;
    public halfPrice!: number;
    public fullPrice!: number;
    public qty!: number;
    public image: any;
    public mainCategoryId?: number;
    public mainCategoryName: string;
    public newCategory: string;
    public isVeg:boolean;
    public isHalf:boolean;
    public isFull:boolean;
    public imageUrl:any;
    public nonVegCategory:string;
    public cookingTime: any;
    public minHr: string;
    constructor(
    ) { }
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
 
  