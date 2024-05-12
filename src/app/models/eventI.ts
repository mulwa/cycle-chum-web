import { LocationI } from './provider';
export interface EventI {
    id:string;
    eventTitle:string;
    eventDesc:string;
    eventDate: string;
    eventTime: string;
    imageUrl:string;
    paymentType:string;
    status: string;
    startAddress:LocationI;
    endAddress:LocationI;
    distance:number;
    amount:string;
    attendees:string;
    attendeesLimit:string;  
}