export interface Dish {
    id?: number;
    name?: string;
    description?: string | undefined;
    halfPrice?: number;
    fullPrice?: number; 
    image?: any
    isVeg?:boolean; 
    imageUrl?:any;
    nonVegCategory?:string;
    mainCategoryId?: number;
    cookingTime?: any;
    minHr?: string;   
    status?:string;
    categories?:string;
    quantity?:any;
    serviceTime?: number;
    bookmark?:boolean;
}

export class DishCategory{
    public id? : number;
    public name!: string;
    public description: string | undefined;
    constructor(
        ) { }
} 
 
  