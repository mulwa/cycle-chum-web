import { Timestamp } from "firebase/firestore";

export interface ProviderI{
    businessName:string;
    businessDescription:string;
    username:string;
    profileImg:string;
    createdOn:Timestamp;
    businessLocation:LocationI;
    uid:string ;

}
export interface LocationI {
    address:string;
    lat:number;
    long:number;
    name:string;

}