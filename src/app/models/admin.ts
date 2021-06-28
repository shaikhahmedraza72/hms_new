export class Admin{
  constructor(
public businessName?:string,
public category?: string,
public gst?: string,
public address?: string,
public foodLincNum?: string,
public id?: number,
public pinCode?: number,
public restaurentLogo?:string,
public restaurentSeal?:string,
public signature?:string,
public termAndCondition?:string,
public city?: string,
public selectedState?: string,
public bankDetails?: Bankdetails,
public accountName?: string,
public accountNumber?: number,
public bankName?: string,
public ifscCode?: string,
public codeImage?:string,
public codeNumber?:string
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