import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { EventI } from 'app/models/eventI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private firestore:Firestore) { }

  getAllEvents(): Observable<EventI[]>{
    const providersRef = collection(this.firestore,'events');
    return collectionData(providersRef,{idField: 'id'}) as Observable<EventI[]>;
   }
   getEventByID(id: string) {
    const providerRef = doc(this.firestore, `events/${id}`);
    return docData(providerRef, { idField: 'id' }) as Observable<EventI>;
  }
}
