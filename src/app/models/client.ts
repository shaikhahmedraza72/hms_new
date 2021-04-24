export class Client {
    public id?: number;
    public business: string;
    public CategoryId?: number;
    public CategoryName: string;
    public address: any;
    public gst: string;
    public foodClass:string;
    public logo: any;
    public seal: string;
    public sign: string;
}

export class CLientCategory {
    public id?: number;
    public name!: string;
    constructor(){}
}

export class ClientBankDetails {
    // required property
    id?: number;
    public accountName: string;
    public accountNumber: number;
    public bankName: string;
    public ifscCode: any;
    public address: any;
    // component 
}