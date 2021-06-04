export class User {
    public id: number;
    public userName: string;
    public email: string;
    public contact: number;
    public address: string;
    public pincode: number;
    constructor(){

    }
}
 
export class City {
    public id?: number;
    public name!: string;
}

export class State {
    public id?: number;
    public name!: string;
}