export class Dish {
    public id? : number;
    public name!: string;
    public description: string | undefined;
    public price!: number;
    // public brand: string,
    // public brand: string,
    public qty!: number;
    public mainCategoryId?: number;
    public mainCategoryName: string;
    public isVeg:boolean;
    public isHalf:boolean;
    // public picture?: string
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
    
