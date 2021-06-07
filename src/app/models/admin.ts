export interface Admin{
businessName?:string;
category?: string;
gst?: string;
address?: string;
foodLincNum?: string,
bankDetails?: Bankdetails ,
id?: number,
pincode?: number,
restaurentLogo?:string;
restaurentSeal?:string;
signature?:string;
termAndCondition?:string;
}
export interface Bankdetails {
    accountName?: string,
    accountNumber?: number,
    bankName?: string,
    ifscCode?: string,
    UPICodeImg?:string;
    UPICodeNumber?:string;
  }