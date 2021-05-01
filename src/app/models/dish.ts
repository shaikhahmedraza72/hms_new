export class Dish {
    public id?: number;
    public name!: string;
    public description: string | undefined;
    public halfPrice!: number;
    public fullPrice!: number;
    public qty!: number;
    public mainCategoryId?: number;
    public mainCategoryName: string;
    public isVeg:boolean;
    public isHalf:boolean;
    public isFull:boolean;
    public imageUrl:string;

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
    
