export class Admin{
  constructor(
public businessName?:string,
public businessCatId?: number,
public gst?: string,
public address?: string,
public foodLincNum?: string,
public id?: number,
public pinCode?: string,
public restaurentLogo?:string,
public restaurentSeal?:string,
public signature?:string,
public termAndCondition?:string,
public cityId?: number,
public stateId?: number,
public city?: string,
public state?: string,
public bankDetails?: Bankdetails,
public accountName?: string,
public accountNumber?: number,
public bankName?: string,
public ifscCode?: string,
public codeImage?:string,
public codeNumber?:string,
public categoryId?:number,
public category?: string,
public contact?: string,
public email?: string
  ){}
}
export class Bankdetails {
  constructor(
    public accountName?: string,
    public accountNumber?: number,
    public bankName?: string,
    public ifscCode?: string,
    public UPICodeImg?:string,
    public UPICodeNumber?:string){}
  }